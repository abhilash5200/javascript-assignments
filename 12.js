const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};
let sum = 0;
for (let v in marks) {
  sum += marks[v];
}
console.log(sum);
let avg = sum / Object.keys(marks).length;
console.log(avg);
let highestSubject = "";
let highestMarks = 0;

for (let subject in marks) {
  if (marks[subject] > highestMarks) {
    highestMarks = marks[subject];
    highestSubject = subject;
  }
}
console.log(highestSubject);
console.log("Highest Scoring Subject:", highestSubject, "-", highestMarks);


marks.computer = 90;
console.log("Updated Marks:", marks);

