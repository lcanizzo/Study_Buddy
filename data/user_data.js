const users = [
    {
        name : 'Mike Roe',
        email : "string@email.com",
        userID : 'M.Roe28',
        topCourses : ["management","marketing","economics"],
        bottomCourses :["american government","sociology","geography"],
        allCourses :["management","marketing","economics","american government","sociology","geography"]
    },
    {
        name : 'Jonna Phan',
        email : "string@email.com",
        userID : "JPhan23",
        topCourses : ['communications','geometry','operations management','calculus'],
        bottomCourses : ['geography','programming','world history','accounting'],
        allCourses : ['communications','geometry','operations management','calculus','geography','programming','world history','accounting']
    },
    {
        name : 'Janay Faulk',
        email : "string@email.com",
        userID: "JanayF45",
        topCourses : ['american government','physics','environment and ecology','geography',],
        bottomCourses : ['architecture','nutrition','spanish','sociology',],
        allCourses : ['american government','physics','environment and ecology','geography','architecture','nutrition','spanish','sociology',]
    },
    {
        name: 'Leana Hammons',
        email: "string@email.com",
        userID: 'LHammonz',
        topCourses: ['management','economics','algebra','trigonometry', 'tech skills','programming'],
        bottomCourses: ['personal health','german','writting','philosophy','anthropology',],
        allCourses: ['management','economics','algebra','trigonometry', 'tech skills','programming','personal health','german','writting','philosophy','anthropology']
    },
    {
        name: 'Huong Coles',
        email: "string@email.com",
        userID: 'HuongCol',
        topCourses: ['sociology','tech skills','history of western civilization','real estate and appraisal','business law'],
        bottomCourses: ['biology','trigonometry','exercise and fitness','spanish','economics',],
        allCourses:['sociology','tech skills','history of western civilization','real estate and appraisal','business law','biology','trigonometry','exercise and fitness','spanish','economics',]
    },
    {
        name: 'Letty Catalano',
        email: "string@email.com",
        userID: 'L.Catalano',
        topCourses: ['geography','research methods in psychology','marketing','general psychology','history of western civilization',],
        bottomCourses: ['tech skills','exercise and fitness','criminla justice','personal health','abnormal psychology','finance'],
        allCourses:['geography','research methods in psychology','marketing','general psychology','history of western civilization','tech skills','exercise and fitness','criminla justice','personal health','abnormal psychology','finance']
    },
    {
        name: 'Britta Driscoll',
        email: "string@email.com",
        userID: 'BrittaD',
        topCourses: ['biology','basic math','trigonometry','american sign language','geography',],
        bottomCourses: ['anthropology','management','english as a second language','accounting','United States History','american sign language',],
        allCourses:['biology','basic math','trigonometry','american sign language','geography','anthropology','management','english as a second language','accounting','United States History','american sign language',]
    },
    {
        name: 'Temeka Culver',
        email: "string@email.com",
        userID: 'TemCulver98',
        topCourses: ['research methods in psychology','marketing','nutrition','social psychology','geography','biology',],
        bottomCourses: ['criminla justice','real estate and appraisal','economics','american government','criminla justice','communications',],
        allCourses:['research methods in psychology','marketing','nutrition','social psychology','geography','biology','criminla justice','real estate and appraisal','economics','american government','criminla justice','communications',],
    },
    {
        name: 'Jerrica Hogue',
        email: "string@email.com",
        userID: 'Jerri.Hogue',
        topCourses: ['history of western civilization','french','drama theater and film','health and nursing','education and teaching',],
        bottomCourses: ['nutrition','business ethics','general psychology','sociology','spanish',],
        allCourses:['history of western civilization','french','drama theater and film','health and nursing','education and teaching','nutrition','business ethics','general psychology','sociology','spanish',]
    },
    {
        name: 'Beckie Mixon',
        email: "string@email.com",
        userID: 'BeckiMix',
        topCourses:['education and teaching','political science','personal health','sociology','college math','precalculus'],
        bottomCourses:['trigonometry','french','educational psychology','tech skills','history of western civilization'],
        allCourses:['education and teaching','political science','personal health','sociology','college math','precalculus','trigonometry','french','educational psychology','tech skills','history of western civilization'],
    },
    {
        name: 'Lashanda	Crowder',
        email: "string@email.com",
        userID: 'Lashanda_C_99',
        topCourses: ['french','statistics','precalculus','programming','environment and ecology',],
        bottomCourses: ['sociology','biology','tech skills','health and nursing','philosophy',],
        allCourses:['french','statistics','precalculus','programming','environment and ecology','sociology','biology','tech skills','health and nursing','philosophy',]
    },
    {
        name: 'Melisa Nevarez',
        email: "string@email.com",
        userID: "MelNev",
        topCourses: ['precalculus','accounting','geometry','college math','art history',],
        bottomCourses: ['business law','english as a second language','business ethics','basic math','chemistry','educational psychology',],
        allCourses:['precalculus','accounting','geometry','college math','art history','business law','english as a second language','business ethics','basic math','chemistry','educational psychology',]
    },
    {
        name: 'Jay Mace',
        email: "string@email.com",
        userID: 'JayMay99',
        topCourses: ['social psychology','architecture','business intelligence','sociology','criminla justice','american sign language',],
        bottomCourses: ['accounting','management','counseling','spanish',],
        allCourses: ['social psychology','architecture','business intelligence','sociology','criminla justice','american sign language','accounting','management','counseling','spanish',]
    },
    {
        name: 'Raymonde	Groce',
        email: "string@email.com",
        userID: "RayGroce83",
        topCourses: ['operations management','american sign language','basic math','programming','abnormal psychology',],
        bottomCourses: ['criminla justice','art history','management','philosophy','drama theater and film','nutrition',],
        allCourses: ['operations management','american sign language','basic math','programming','abnormal psychology','criminla justice','art history','management','philosophy','drama theater and film','nutrition',]
    },
    {
        name: 'Shanika Clough',
        email: "string@email.com",
        userID: 'ShanikaClough',
        topCourses: ['art history','human growth and development','criminla justice','nutrition',],
        bottomCourses: ['finance','history of western civilization','abnormal psychology','literature','physical science','information technology'],
        allCourses: ['art history','human growth and development','criminla justice','nutrition','finance','history of western civilization','abnormal psychology','literature','physical science','information technology']
    },
    {
        name: 'Luis	Regan',
        email: "string@email.com",
        userID: 'LuiRegan',
        topCourses: ['criminla justice','human resources','accounting','biology','basic math'],
        bottomCourses: ['research methods in psychology','health and nursing','art history','trigonometry',],
        allCourses:['criminla justice','human resources','accounting','biology','basic math','research methods in psychology','health and nursing','art history','trigonometry',]
    },
    {
        name: 'Cristen Headley',
        email: "string@email.com",
        userID: 'CrisHeadley56',
        topCourses: ['communications','health and nursing','personal health','geometry','writting',],
        bottomCourses: ['United States History','calculus','trigonometry','business intelligence','human resources',],
        allCourses: ['communications','health and nursing','personal health','geometry','writting','United States History','calculus','trigonometry','business intelligence','human resources',]
    },
    {
        name: 'Lolita Muller',
        email: "string@email.com",
        userID: 'Muller_Lol',
        topCourses: ['anthropology','statistics','precalculus','statistics','research methods in psychology',],
        bottomCourses: ['drama theater and film','abnormal psychology','geography','architecture',],
        allCourses: ['anthropology','statistics','precalculus','statistics','research methods in psychology','drama theater and film','abnormal psychology','geography','architecture',]
    },
    {
        name: 'Ji Hutchison',
        email: "string@email.com",
        userID: 'JiHutchy',
        topCourses: ['marketing','general psychology','physics','music','statistics',],
        bottomCourses: ['tech skills','computer skills','nutrition','architecture','communications'],
        allCourses: ['marketing','general psychology','physics','music','statistics','tech skills','computer skills','nutrition','architecture','communications']
    },
    {
        name: 'Graciela	Fonseca',
        email: "string@email.com",
        userID: 'Graciela_F_85',
        topCourses: ['management','personal health','communications','architecture','basic math'],
        bottomCourses: ['precalculus','criminla justice','abnormal psychology','american sign language',],
        allCourses: ['management','personal health','communications','architecture','basic math','precalculus','criminla justice','abnormal psychology','american sign language',]
    },
]

module.exports = users;
