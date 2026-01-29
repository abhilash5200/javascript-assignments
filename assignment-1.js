//Assignment 1: Date Creation & Extraction (Beginner)

//Tasks:
       //1. Create a Date object for current date & time.
let currentDate=new Date();
console.log(currentDate);


       //2. Extract and display:
                    //* Year
                    let year=currentDate.getFullYear();
                    console.log("Year:",year);
                    

                    //* Month (human readable)
                    let month=currentDate.getMonth()+1;
                    console.log('month:',month)
                    

                    


                    //* Date
                    let date=currentDate.getDate();
                    console.log("Date:",date);
                    



                    //* Day of week
                    let day=currentDate.getDay();
                    console.log("Day of week:",day);


                    //* Hours, minutes, seconds
                    let hours=currentDate.getHours();
                    let minutes=currentDate.getMinutes();
                    let seconds=currentDate.getSeconds();
                    console.log(`Time: ${hours}:${minutes}:${seconds}`);

     // 3. Display the date in this format:
                    //DD-MM-YYYY HH:mm:ss
 let now = new Date();

console.log(now.toLocaleString());


   // Assignment 2: Date Comparison & Validation (Beginner → Intermediate)


 //Given:
      let enrollmentDeadline = new Date("2026-01-20");

//Tasks:
  //1.Check if:
      //* Today is before deadline → "Enrollment Open"
      if (currentDate<enrollmentDeadline){
        console.log("Enrollment Open");
      }else{
        console.log("Enrollment Closed");
      }
        



     // * Today is after deadline → "Enrollment Closed"

  //2. Validate user input date:
      //* Input: "2026-02-30"
      let inputDate=new Date('2026-02-30')
        console.log(inputDate);
        console.log(isNaN(inputDate.getTime()));   
        

        
     // * Detect whether the date is valid or invalid
        if(isNaN(inputDate.getTime())){
          console.log("Invalid date");
        }else{
          console.log("Valid date");
        }



//Assignment 3: Age Calculator (Intermediate)

//Input:
    let dob = "2000-05-15";


//Tasks:
        //1. Calculate exact age in years
        let birthDate=new Date(dob);
        let age=currentDate.getFullYear()-birthDate.getFullYear();
        console.log(age);