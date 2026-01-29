const roles = {
  admin: ["create", "update", "delete", "view"],
  student: ["view"]
};
//MODULE 4: ROLE & PERMISSION ENGINE
  //-> Get all role names
    let roleNames=Object.keys(roles);
    console.log(roleNames);



  //-> Check if student can delete
    let canDelete=roles.student.includes('delete');
    console.log(canDelete);



  //-> Create a flat list of all unique permissions

    let allPermissions=new Set();
    Object.values(roles).forEach(perms=>{
      perms.forEach(perm=>allPermissions.add(perm));
    });
    console.log(allPermissions);

 // -> Add new role moderator immutably

    let addRole=(roles,roleName,permissions)=>{
      return {...roles,[roleName]:permissions};
    }
    let updatedRoles=addRole(roles,'moderator',['update','view']);
    console.log(updatedRoles);

