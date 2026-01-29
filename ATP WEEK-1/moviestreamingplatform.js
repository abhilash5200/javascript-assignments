//ASSIGNMENT 4:
//------------
//Movie Streaming Platform
//You are working on a movie recommendation system.

//Test data:
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

//1. filter() only "Sci-Fi" movies
let result = movies.filter(element => element.genre === "Sci-Fi")
console.log(result)

//2. map() to return: "Inception (8.8)"
let result1 = movies.map(element => element.title + " (" + element.rating + ")")
console.log(result1)

//3. reduce() to find average movie rating
let result2 = movies
  .map(element => element.rating)
  .reduce((aaumulator, element) => aaumulator + element, 0) / movies.length
console.log(result2)

//4. find() movie "Joker"
let result3 = movies.find(element => element.title === "Joker")
console.log(result3)

//5. findIndex() of "Avengers"
let result4 = movies.findIndex(element => element.title === "Avengers")
console.log(result4)
