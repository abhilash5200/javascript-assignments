//Assignment 1: User Profile Manager

//Scenario : You are managing a logged-in user’s profile in a web application.


//Test data:
const user = {
  id: 101,
  name: "Ravi",
  email: "ravi@gmail.com",
  role: "student",
  isActive: true
};

//1. Read and print the user’s name and email
console.log(user.name, user.email)

//2. Add a new property lastLogin: "2026-01-01"
user.lastLogin = "2026-01-01"
console.log(user)

//3. Update role from "student" to "admin"
user.role = "admin"
console.log(user)

//4. Delete the isActive property
delete user.isActive
console.log(user)

//5. Use Object.keys() to list all remaining fields
let result = Object.keys(user)
console.log(result)



//Assignment 2: Exam Result Summary
//---------------------------------
//Scenario : Marks are stored subject-wise for a student.

//Test data:
const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};

//1. Calculate total marks
let total = Object.values(marks).reduce((acc, value) => acc + value, 0)
console.log(total)

//2. Calculate average marks
let average = total / Object.keys(marks).length
console.log(average)

//3. Find the highest scoring subject
let highestSubject = Object.keys(marks).reduce((a, b) =>
  marks[a] > marks[b] ? a : b
)
console.log(highestSubject)

//4. Add a new subject computer: 90
marks.computer = 90
console.log(marks)


//Assignment 3: Application Settings Controller
//---------------------------------------------
//Scenario : A web app stores user preferences as settings.

//Test data:
const settings = {
  theme: "light",
  notifications: true,
  autoSave: false,
  language: "en"
};

//1. Toggle theme between "light" and "dark"
settings.theme = settings.theme === "light" ? "dark" : "light"
console.log(settings)

//2. Turn autoSave to true
settings.autoSave = true
console.log(settings)

//3. Remove the notifications setting
delete settings.notifications
console.log(settings)

//4. Freeze the settings object so it cannot be modified
Object.freeze(settings)
console.log(settings)
