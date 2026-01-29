//TASKS

const users = [
  { id: 1, name: "Ravi", role: "student", active: true },
  { id: 2, name: "Anil", role: "admin", active: true },
  { id: 3, name: "Suman", role: "student", active: false }
];







//MODULE-1 :USER PROCESSING ENGINE
 // -> Get only active users
 let activeUsers=users.filter(user=>user.active);
 console.log(activeUsers);




  //-> Extract names of active users
  let activeUserNames=activeUsers.map(user=>user.name);
  console.log(activeUserNames);


  



  //-> Check if any admin exists

  let adminExists=users.some(user=>user.role==="admin");
  console.log(adminExists);
  //-> Find user by id
  let userById=users.find(user=>user.id===2);
  console.log(userById);

  //-> Deactivate a user immutably
  let deactivateUser=(id)=>{
    return users.map(user=>{
      if(user.id===id){
        return {...user,active:false}
      }else{
        return user;
      }
    })
  }
  let deactivatedUsers=deactivateUser(3);
  console.log(deactivatedUsers);