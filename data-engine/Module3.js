const courses = [
  { id: 101, title: "JS Basics", price: 500, published: true },
  { id: 102, title: "React", price: 800, published: false },
  { id: 103, title: "Node", price: 600, published: true }
];

const cart = [
  { courseId: 101, qty: 1 },
  { courseId: 103, qty: 2 }
];

// MODULE 3: SHOPPING CART ENGINE 

// -> Merge cart with courses to get full course info
let mergedCart = cart.map(cartItem => {
  let course = courses.find(course => course.id === cartItem.courseId);
  return { ...cartItem, course };
});
console.log(mergedCart);

// -> Calculate total cart amount
let totalCartAmount = mergedCart.reduce(
  (acc, cartItem) => acc + cartItem.course.price * cartItem.qty,
  0
);
console.log(totalCartAmount);

// -> Increase quantity of a course (immutably)
let increaseQty = (courseId) => {
  return cart.map(cartItem => {
    if (cartItem.courseId === courseId) {
      return { ...cartItem, qty: cartItem.qty + 1 };
    } else {
      return cartItem;
    }
  });
};

// -> Remove a course from cart
let removeCourse = (courseId) => {
  return cart.filter(cartItem => cartItem.courseId !== courseId);
};

// -> Check if all cart items are paid courses
let allPaidCourses = cart.every(cartItem => {
  let course = courses.find(course => course.id === cartItem.courseId);
  return course && course.published;
});
console.log(allPaidCourses);


