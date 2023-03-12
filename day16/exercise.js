const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
let age = 250;
let isMarried = true
const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}
const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`

// Exercises: Level 1

// 1. Change skills array to JSON using JSON.stringify()

const skillsArr = JSON.stringify(skills)
console.log(skillsArr) // ["HTML","CSS","JS","React","Node","Python"]

// 2. Stringify the age variable

console.log(JSON.stringify(age)) // 250

// 3. Stringify the isMarried variable

console.log(JSON.stringify(isMarried)) // true

// 4. Stringify the student object

console.log(JSON.stringify(student))
/* {
    "firstName":"Asabeneh",
    "lastName":"Yetayehe",
    "age":250,
    "isMarried":true,
    "skills":["HTML","CSS","JS","React","Node","Python"]
}
*/

// Exercise: Level 2

// 1. Stringify the students object with only firstName, lastName and skills properties

console.log(JSON.stringify(student, ['firstName', 'lastName', 'skills']))
/*
{
    "firstName":"Asabeneh",
    "lastName":"Yetayehe",
    "skills":["HTML","CSS","JS","React","Node","Python"]
}
*/

// Exercises: Level 3

// 1. Parse the txt JSON to object.

console.log(JSON.parse(txt))

/*
{
  Alex: {
    email: 'alex@alex.com',
    skills: [ 'HTML', 'CSS', 'JavaScript' ],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'Redux',
      'MongoDB',
      'Express',
      'React',
      'Node'
    ],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: [ 'HTML', 'CSS', 'JavaScript', 'React', 'Redux' ],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: [ 'HTML', 'CSS', 'JavaScript', 'Python' ],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: [ 'HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js' ],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: [ 'HTML', 'CSS', 'JavaScript', 'React' ],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'MongoDB',
      'Express',
      'React',
      'Node'
    ],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}
*/

// 2. Find the user who has many skills from the variable stored in txt.

const data = JSON.parse(txt);
let maxSkills = 0;
let userWithMaxSkills = '';

for (const user in data) {
  const skillsCount = data[user].skills.length;
  if (skillsCount > maxSkills) {
    maxSkills = skillsCount;
    userWithMaxSkills = user;
  }
}

console.log(`${userWithMaxSkills} has most number of skills with ${maxSkills} skills.`); // Asab has most number of skills with 8 skills.