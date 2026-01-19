    let sum=0
    let marks=[90,80,70,87,34,76,23,44]
     for(let v of marks)
        //write a function that receive mark array as a argument and return small element
        sum+=v
        console.log(sum)
        function getSmallestMark(marks) {
    let smallest = marks[0];

    for (let i of marks) {
        if (marks[i] < smallest) {
            smallest = marks[i];
        }
    }
    return smallest;
}

console.log(getSmallestMark([78, 45, 89, 32, 67])); 

  