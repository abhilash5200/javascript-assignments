function getSmallestMark(marks) {
    let smallest = marks[0];

    for (let i=0; i < marks.length; i++) {
        if (marks[i] < smallest) {
            smallest = marks[i];
        }
    }
    return smallest;
}

console.log(getSmallestMark([78, 45, 89, 32, 67])); 
