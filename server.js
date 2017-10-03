// D E P E N D E N C I E S 
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const course_data = require('./data/course_data.js');
const user_data = require('./data/user_data.js');

// E X P R E S S  A P P
const app = express();
const PORT = process.env.PORT || 8888;

// D A T A  P A R S I N G
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

// A P P   D A T A
const subjects = course_data;
const users = user_data;

// U S E R   D A T A
let userCourses = [];
let topCourses = [];
let bottomCourses = [];
let UserInfo = {};

let user = {};


// F U N C T I O N S 
let goodMatchClientBottom = [];
let goodMatchClientTop = [];
let goodMatch = [];
const match = ()=>{
    for(let i=0; i<users.length; i++){
        //for each stored user
        for(let a=0; a<users[i].topCourses.length;a++){
            //for each of a user's top classes
            for(let c=0; c<user.bottomCourses.length;c++){
                //for each of the current user's bottom courses
                if(users[i].topCourses[a].indexOf(user.bottomCourses[c])!==-1){
                    //if there is a match
                    goodMatchClientBottom.push(users[i]);
                }
            }
        }
    };
    for(let i=0; i<users.length; i++){
        //for each stored user
        for(let a=0; a<users[i].bottomCourses.length;a++){
            //for each of a user's bottom classes
            for(let c=0; c<user.topCourses.length;c++){
                //for each of the current user's top courses
                if(users[i].bottomCourses[a].indexOf(user.topCourses[c])!==-1){
                    //if there is a match
                    goodMatchClientTop.push(users[i]);
                }
            }
        }
    }
    for (let i=0; i<goodMatchClientBottom.length;i++){
        //for each good match for client tutor
        if (goodMatchClientTop.indexOf(goodMatchClientBottom[i])!==-1 && goodMatch.indexOf(goodMatchClientBottom[i])==-1){
            //if there is a match with client to be tutored
            goodMatch.push(goodMatchClientBottom[i]);
        }
    }
    for (let i=0; i<goodMatch.length; i++){
        //for each match
        //if there is a class they tutor the current student needs
        for(let t=0; t<goodMatch[i].topCourses.length; t++){
            if(user.bottomCourses.indexOf(goodMatch[i].topCourses[t]) !==-1){
                goodMatch[i].tutoring =[]
                goodMatch[i].tutoring.push(goodMatch[i].topCourses[t]);
            }
        }
        //if there is a class they need the current student tutors
        for(let t=0; t<goodMatch[i].bottomCourses.length; t++){
            if(user.topCourses.indexOf(goodMatch[i].bottomCourses[t]) !==-1){
                goodMatch[i].needs =[]
                goodMatch[i].needs.push(goodMatch[i].bottomCourses[t]);
            }
        }
    }
};

// G E T   D A T A
app.get('/data_subjects', (req,res)=>{
    res.json(subjects);
});

app.get('/data_courses', (req,res)=>{
    res.json(userCourses);
});

app.get('/data_bottom', (req,res)=>{
    res.json(bottomCourses);
});

app.get('/data_match', (req,res)=>{
    res.json(goodMatch);
});

// R O U T I N G
app.get('/', (req,res)=>{
    userCourses = [];
    topCourses = [];
    bottomCourses = [];
    UserInfo = {};
    user = {};
    goodMatchClientBottom = [];
    goodMatchClientTop = [];
    goodMatch = [];
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get('/home', (req,res)=>{
    res.sendFile(path.join(__dirname, "search.html"));
});

app.get('/current_courses', (req,res)=>{
    res.sendFile(path.join(__dirname, "current_courses.html"));    
});

app.get('/top_courses', (req,res)=>{
    res.sendFile(path.join(__dirname, "top_courses.html"));    
});

app.get('/bottom_courses', (req,res)=>{
    res.sendFile(path.join(__dirname, "bottom_courses.html"));    
});

// P O S T   M E T H O D S
app.post('/new_user_setup', (req,res)=>{
    userInfo = req.body;
    res.redirect('/current_courses');        
});

app.post('/current_courses', (req,res)=>{
    let currentCourses = req.body;
    userCourses.push(currentCourses);
    res.redirect('/top_courses');        
});

app.post('/top_courses', (req,res)=>{
    topCourses.push(req.body);
    for(let i=0; i<userCourses[0].courseboxes.length; i++){
        if(topCourses[0].courseboxes.indexOf(userCourses[0].courseboxes[i])==-1){
            bottomCourses.push(userCourses[0].courseboxes[i]);
        }
    }    
    res.redirect('/bottom_courses');        
});

app.post('/bottom_courses', (req,res)=>{
    bottomCourses = [];
    bottomCourses.push(req.body);
    // create user object
    user.name = userInfo.name;
    user.email = userInfo.email;
    user.userID = userInfo.userID;
    user.topCourses = topCourses[0].courseboxes;
    user.bottomCourses = bottomCourses[0].courseboxes;
    user.allCourses = userCourses[0].courseboxes;    
    match();
    res.redirect('/home');        
});

// L I S T E N
app.listen(PORT,()=>{
    console.log('listening on:', PORT);
});