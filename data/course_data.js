const subjects = [
    {
        name : "business",
        areas : [
            {
               name: "management",
               classes: [
                   {
                       name: "all"
                   },
                   {
                       name: "leadership"
                   },
                   {
                       name: "project management"
                   },
                   {
                       name: "team building"
                   },
               ] 
            },
            {
               name: "marketing",
               classes: [
                    {
                        name: "all"
                    },
                    {
                        name: "sales"
                    },
                    {
                        name: "customer service"
                    }
                ]                 
            },
            {
                name: "economics",
                classes: [
                    {
                        name: "all"
                    },
                    {
                        name: "macroeconomics"
                    },
                    {
                        name: "microeconomics"
                    }
                ]
            },
            {
               name: "business law",
               classes: [
                    {
                        name: "all"
                    }
                ] 
            },
            {
               name: "accounting",
               classes: [
                    {
                        name: "all"
                    },
                    {
                        name: "financial accounting"
                    }
                ]             
            },
            {
               name: "operations management",
               classes: [
                    {
                        name: "all"
                    },
                    {
                        name: "small business"
                    }
                ]             
            },
            {
               name: "business ethics",
               classes: [
                    {
                        name: "all"
                    }
                ]             
            },
            {
               name: "information technology",
               classes: [
                    {
                        name: "all"
                    },
                    {
                        name: "information systems"
                    }
                ] 
            },
            {
               name: "human resources",
               classes: [
                   {
                       name: "all",
                   },
                   {
                       name: "human resource management",
                   },
                   {
                       name: "organizational behavior"
                   }
               ]
            },
            {
               name: "finance",
               classes: [
                    {
                        name: "all"
                    }
                ]             
            },
            {
               name: "computer skills",
               classes: [
                    {
                        name: "all"
                    },
                    {
                        name: "microsoft office"
                    }
                ]             
            },
            {
               name: "business intelligence",
               classes: [
                    {
                        name: "all"
                    },
                    {
                        name: "quantitative analysis"
                    }
                ]             
            },
            {
               name: "real estate and appraisal",
               classes: [
                    {
                        name: "all"
                    }
                ]             
            },
            {
               name: "communications",
               classes: [
                    {
                        name: "all"
                    },
                    {
                        name: "public speaking"
                    },
                    {
                        name: "workplace communication"
                    }
                ]             
            },
        ]
    },
    {
        name : "math",
        areas : [
            {
                name: "algebra",
                classes: [
                    {
                        name: "all"
                    }
                ]             
            },    
            {
                name: "statistics",
                classes: [
                    {
                        name: "all"
                    }
                ]             
            }, 
            {
                name: "precalculus",
                classes: [
                    {
                        name: "all"
                    }
                ]             
            }, 
            {
                name: "geometry",
                classes: [
                    {
                        name: "all"
                    }
                ]             
            }, 
            {
                name: "calculus",
                classes: [
                    {
                        name: "all"
                    },
                    {
                        name: "calc 1"
                    },
                    {
                        name: "calc 2"
                    }
                ]             
            }, 
            {
                name: "basic math",
                classes: [
                    {
                        name: "all"
                    }
                ]             
            },     
            {
                name: "trigonometry",
                classes: [
                    {
                        name: "all"
                    }
                ]             
            },
            {
                name: "college math",
                classes: [
                    {
                        name: "all"
                    }
                ]             
            }
        ]
    },
    {
        name : "social science",
        areas : [
            {
                name: "american government",
                classes: [
                    {
                        name: "all"
                    }
                ]             
            },    
            {
                name: "sociology",
                classes: [
                    {
                        name: "all"
                    }
                ]             
            }, 
            {
                name: "political science",
                classes: [
                    {
                        name: "all"
                    }
                ]             
            }, 
            {
                name: "criminla justice",
                classes: [
                    {
                        name: "all"
                    }
                ]             
            }, 
            {
                name: "geography",
                classes: [
                    {
                        name: "all"
                    }
                ]             
            }, 
            {
                name: "education and teaching",
                classes: [
                    {
                        name: "all"
                    }
                ]             
            },     
            {
                name: "counseling",
                classes: [
                    {
                        name: "all"
                    }
                ]             
            },
            {
                name: "anthropology",
                classes: [
                    {
                        name: "all"
                    }
                ]             
            }
        ]
    },
    {
        name : "science",
        areas : [
            {
                name: "biology",
                classes: [
                    {
                        name: "all"
                    }
                ]             
            },    
            {
                name: "chemistry",
                classes: [
                    {
                        name: "all"
                    }
                ]             
            }, 
            {
                name: "earth science",
                classes: [
                    {
                        name: "all"
                    }
                ]             
            }, 
            {
                name: "physics",
                classes: [
                    {
                        name: "all"
                    }
                ]             
            }, 
            {
                name: "environment and ecology",
                classes: [
                    {
                        name: "all"
                    }
                ]             
            }, 
            {
                name: "health and nursing",
                classes: [
                    {
                        name: "all"
                    }
                ]             
            },     
            {
                name: "physical science",
                classes: [
                    {
                        name: "all"
                    }
                ]             
            }
        ]
    },
    {
        name : "humanities",
        areas : [
            {
                name: "art history",
                classes: [
                    {
                        name: "all"
                    }
                ]             
            },    
            {
                name: "philosophy",
                classes: [
                    {
                        name: "all"
                    }
                ]             
            }, 
            {
                name: "music",
                classes: [
                    {
                        name: "all"
                    }
                ]             
            }, 
            {
                name: "drama theater and film",
                classes: [
                    {
                        name: "all"
                    }
                ]             
            }, 
            {
                name: "architecture",
                classes: [
                    {
                        name: "all"
                    }
                ]             
            }
        ]
    },
    {
        name : "history",
        areas : [
            {
                name: "world history",
                classes: [
                    {
                        name: "all"
                    }
                ]             
            },    
            {
                name: "United States History",
                classes: [
                    {
                        name: "all"
                    }
                ]             
            }, 
            {
                name: "history of western civilization",
                classes: [
                    {
                        name: "all"
                    }
                ]             
            }
        ]
    },
    {
        name : "english",
        areas : [
            {
                name: "reading",
                classes: [
                    {
                        name: "all"
                    }
                ]             
            },    
            {
                name: "writting",
                classes: [
                    {
                        name: "all"
                    },
                    {
                        name: "english composition 1"
                    },
                    {
                        name: "english composition 2"
                    }
                ]             
            }, 
            {
                name: "literature",
                classes: [
                    {
                        name: "all"
                    }
                ]             
            }
        ]
    },
    {
        name : "computer science",
        areas : [
            {
                name: "programming",
                classes: [
                    {
                        name: "all"
                    },
                    {
                        name: "programming languages I"
                    },
                    {
                        name: "database systems"
                    }
                ]             
            },    
            {
                name: "tech skills",
                classes: [
                    {
                        name: "all"
                    }
                ]             
            }
        ]
    },
    {
        name : "psychology",
        areas : [
            {
                name: "general psychology",
                classes: [
                    {
                        name: "all"
                    }
                ]             
            },    
            {
                name: "abnormal psychology",
                classes: [
                    {
                        name: "all"
                    }
                ]             
            }, 
            {
                name: "human growth and development",
                classes: [
                    {
                        name: "all"
                    }
                ]             
            }, 
            {
                name: "research methods in psychology",
                classes: [
                    {
                        name: "all"
                    }
                ]             
            }, 
            {
                name: "social psychology",
                classes: [
                    {
                        name: "all"
                    }
                ]             
            }, 
            {
                name: "educational psychology",
                classes: [
                    {
                        name: "all"
                    }
                ]             
            }
        ]
    },
    {
        name : "foreign language",
        areas : [
            {
                name: "spanish",
                classes: [
                    {
                        name: "all"
                    }
                ]             
            },    
            {
                name: "french",
                classes: [
                    {
                        name: "all"
                    }
                ]             
            }, 
            {
                name: "german",
                classes: [
                    {
                        name: "all"
                    }
                ]             
            }, 
            {
                name: "english as a second language",
                classes: [
                    {
                        name: "all"
                    }
                ]             
            }, 
            {
                name: "american sign language",
                classes: [
                    {
                        name: "all"
                    }
                ]             
            }
        ]
    },
    {
        name : "lifestyle",
        areas : [
            {
                name: "exercise and fitness",
                classes: [
                    {
                        name: "all"
                    }
                ]             
            },    
            {
                name: "personal health",
                classes: [
                    {
                        name: "all"
                    }
                ]             
            }, 
            {
                name: "nutrition",
                classes: [
                    {
                        name: "all"
                    }
                ]             
            }
        ]
    },
];

module.exports = subjects;