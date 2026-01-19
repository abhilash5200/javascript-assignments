let marks=[10,20,30,40,50,60,70,80,90,100]
//filter(selection)
   //get marks<70
   let result1=marks.filter(element=>element<70)
   console.log(result1)

   //map(modification or transformation)
   //add 5 marks to all
   let result2=marks.map(element=>element+5)
   console.log(result2)
    

   //reduce(aggregation)
   //find sum of marks
      result3=marks.reduce((aaumulator,element)=>aaumulator+element,0)
      console.log(result3)
      //find small element of marks
      let small=marks.reduce((aaumulator,element)=>element<aaumulator?element:aaumulator,marks[0])

      //smallest element using for loop
      for(let i=0;i<marks.length;i++){
        if(marks[i]<small)
            small=marks[i]
      }
      console.log(small)

      //find element
          //find 23
          let result4=marks.find(element=>element==23)
          console.log(result4)
          //find index of 23 
          let result5=marks.findIndex(element=>element==23)
          console.log(result5)
      

    
   