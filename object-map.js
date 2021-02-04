const students = [
  { id: 11, fname: "jakob", isPresent: true },
  { id: 12, fname: "maruf", isPresent: false },
  { id: 34, fname: "tuheen", isPresent: true },

  { id: 30, fname: "farhana", isPresent: false },
];

const studentsName = [];

for (let i = 0; i < students.length; i++) {
  const element = students[i].fname;
  studentsName.push(element);
}

for (let index = 0; index < studentsName.length; index++) {
  const element = studentsName[index];
  console.log(element);
}

console.log(studentsName);

const result = students.map((x) => `this is ${x.fname}`);

console.log(result);

var result2 = students.filter((s) => s.isPresent == true);

console.log(result2);

var result3 = students.find((s) => (s.id = 22));

console.log("result found", result3);
