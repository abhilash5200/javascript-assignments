//= doesnot create a new copy of the primitive value
//...creates a reference to the same primitive value-spread operator
//we cannot use spread operator in Nested objects
//with ... spread operator we can create only plain objects
//for nested objects we have to use structuredClone() method
//Hands-On 1: Shallow Copy (Controlled Mutation Use Case)
 //Given Data:
              const user = {
                id: 101,
                name: "Ravi",
                preferences: {
                  theme: "dark",
                  language: "en"
                }
              };

// Task
   // 1. Create a shallow copy of user
            const copiedUser = { ...user };
            console.log(copiedUser);



    //2. Change:
          //i. name in the copied object
            copiedUser.name="Anuar";
            console.log(copiedUser);
          //ii. preferences.theme in the copied object
            copiedUser.preferences.theme="light";
            console.log(copiedUser);
         // iii .Log both original and copied objects
            console.log(user);
            console.log(copiedUser);

          //iv. Observe what changes and what doesn’t
             //name in original object remains same
             //preferences.theme in original object also changes because of shallow copy



             //Hands-On 2: Deep Copy (Isolation & Safety Use Case)


// Given Data:
                const order = {
                  orderId: "ORD1001",
                  customer: {
                    name: "Anita",
                    address: {
                      city: "Hyderabad",
                      pincode: 500085
                    }
                  },
                  items: [
                    { product: "Laptop", price: 70000 }
                  ]
                };

// Task:
      //1. Create a deep copy of order
      let copiedOrder=structuredClone(order);
      console.log(copiedOrder);


      //2. Modify in copied object:
            //i. customer.address.city
                copiedOrder.customer.address.city="Bangalore";
                console.log(copiedOrder);


            //ii. items[0].price
                copiedOrder.items[0].price=60000;
                console.log(copiedOrder);



            //iii. Verify original object remains unchanged
                console.log(order);
                console.log(copiedOrder);
               