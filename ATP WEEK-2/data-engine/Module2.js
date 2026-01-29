//MODULE 2: COURSE CATALOG ENGINE
const courses = [
  { id: 101, title: "JavaScript", price: 999, published: true },
  { id: 102, title: "React", price: 1499, published: false },
  { id: 103, title: "Node", price: 1299, published: true }
];




  //-> Get published courses
    let publishedCourses=courses.filter(course=>course.published);
    console.log(publishedCourses);




  //-> Sort courses by price (high → low)
    let sortedCourses=courses.slice().sort((a,b)=>b.price-a.price);
    console.log(sortedCourses);







  //-> Extract { title, price } only
    let courseTitlesAndPrices=courses.map(course=>({title:course.title,price:course.price}));
    console.log(courseTitlesAndPrices);






  //-> Calculate total value of published courses
    let totalValue=courses.filter(course=>course.published).reduce((acc,course)=>acc+course.price,0);
    console.log(totalValue);








  //-> Add a new course immutably
    let addCourse=(newCourse)=>{
      return [...courses,newCourse];
      
    }
    



