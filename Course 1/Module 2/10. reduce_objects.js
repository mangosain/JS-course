const studentsArr = [
  {
    name: "Mike",
    grade: 75,
  },
  {
    name: "Emma",
    grade: 83,
  },
  {
    name: "Seth",
    grade: 66,
  },
];

const totalGrades = studentsArr.reduce(function (total, currentStudent) {
  return total + currentStudent.grade;
}, 0);

console.log(`The average of the class is ${totalGrades / studentsArr.length}`);
