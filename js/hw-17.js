// task 1

// const person = {
//     name : "sdasdasdasdsd",
//     surname: " sdasdasdwdwdsda",
//     age : 25, 

// }

// function convertInfo(person) {
//     const {name, surname, age} = person;
//     return `Мене звати ${name} ${surname} і мені ${age} років`;
// }

// console.log(convertInfo(person))


// task 2

// const student = {
//     name : "jake",
//     surname: "parker",
//     grades : [8, 9, 6],

// }

// function calcGrades (student) {
//     const {name, surname, grades} = student;

//     const [grade1, grade2, grade3] = grades;

//     const calculatedGrades = Math.round((grade1 + grade2 + grade3) / 3);

//     return `Ви ${name} ${surname} і ваш середній бал за 3 предмети : ${calculatedGrades} `


// }

// console.log(calcGrades(student))


// task 3


// const guy = {
//     name : "Mathew",
//     emails : ["fobaho7554@paldept.com", "alhajj@msn.com", "jacks@outlook.com"]
// }

// function showFirstEmail (guy) {
//     const {name, emails} = guy;

//     const [email1, ...otherEmails] = emails;

//     return email1;
// }

// console.log(showFirstEmail(guy))

// task 4


// const data = {
//     users : [
//         {name : "john", age : 56},
//         {name : "blake", age : 15},
//         {name : "griffin", age : 82},
//         {name : "tyler", age : 10},
//         {name : "muffin", age : 17},
//         {name : "grabie", age : 23},

//     ]

// }

// function getAdultUsers(data) {
    
//     const { users } = data;
  
//     const usersAbove18 = users.filter(({ age }) => age > 18);
  
//     return usersAbove18;
//   }

// console.log(getAdultUsers(data))



// task 5

const musicLibrary = {
    count : 2, 
    artists : [ {
        name : "The Beatles", 
        albums : [
            {
                title : "Sgt. Pepper's Lonely Hearts Club Band",
                year : 1967, 
                tracks : [
                    {title : "With a little help from my friends ",
                    duration : "2.44"
                },
                {title : "Lucy in the Sky With Diamonds",
                duration : "3.28"
            },
            {title : "A day in the life ",
            duration : "5.33"
        },
                ]
            },
            {
                title : "Abbey Road",
                year : 1969, 
                tracks : [
                    {title : "Come together",
                    duration : "4.19"
                },
                {title : "Something",
                duration : "3.01"
            },
            {title : "Here comes The Sun",
            duration : "3.06"
        },
                ]
            }
        ]
    },
    {
    name : "Pink Floyd",
    albums : [
        { 
            title : "The wall",
            year : 1979,
            tracks : [
                {
                    title : "Another brick in the wall",
                    duration : 3.59,
                },
                {
                    title : "Comfortably Numb",
                    duration : 6.23,
                },
                {
                    title : "Hey You",
                    duration : 4.40,
                }
            ]
            

        },
        { 
            title : "The Dark Side of The Moon",
            year : 1979,
            tracks : [
                {
                    title : "Speak to me/ Breathe",
                    duration : 3.58,
                },
                {
                    title : "time",
                    duration : 7.06,
                },
                {
                    title : "money",
                    duration : 6.22,
                }
            ]
        }
    ]
    }
]

};

const {
    artists: [
      {
        name: artist1Name,
        albums: [
          {
            title: album1Title,
            year: album1Year,
            tracks: [track1, track2, track3],
          },
          {
            title: album2Title,
            year: album2Year,
            tracks: [track4, track5, track6],
          },
        ],
      },
      {
        name: artist2Name,
        albums: [
          {
            title: album3Title,
            year: album3Year,
            tracks: [track7, track8, track9],
          },
          {
            title: album4Title,
            year: album4Year,
            tracks: [track10, track11, track12],
          },
        ],
      },
    ],
  } = musicLibrary;



