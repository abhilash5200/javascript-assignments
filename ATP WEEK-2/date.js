let date1=new Date()
console.log(date1)//ISO
console.log(date1.toDateString())//human readable
let date2=new Date('2026-01-21')
let date3=new Date(2024,0,30)//month-0to11
let date4=new Date(Date.now())//5days later
console.log(date2)
console.log(date3)
console.log(date4)
//if we do not pass any value it will take default date and time
let date5=new Date(2024,0)//deafult day is 1
let date6=new Date(2024,0,0)//december 31 2023
//getfullyear()-4digit year
//getmonth()-0to11
//getdate()-1to31
//getday()-0to6
//gethours()-0to23
//getminutes()-0to59
//getseconds()-0to59
//setfullyear()-4digit year
//setmonth()-0to11
//setdate()-1to31

let date7=new Date(2022,0,1)
let date8=new Date(2024,0,1)
//find difference between two dates
if(date7>date8){
    [date7,date8]=[date8,date7]
}
//find years
let years=date8.getFullYear()-date7.getFullYear()
//find months
let months=date8.getMonth()-date7.getMonth()
//find days
let days=date8.getDate()-date7.getDate()

if(months<0){
    years--;
    months+=12;
}
if(days<0){
    months--;
    //get no of days in previous month
    //
    
}
console.log(years,months,days)