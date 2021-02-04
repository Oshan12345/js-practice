class ParentInformation {
  constructor(fatherName, motherName) {
    this.fatherName = fatherName;
    this.motherName = motherName;
  }
}

class StudentInformation extends ParentInformation {
  constructor(id, fname, lname, fatherName, motherName) {
    super(fatherName, motherName);
    this.studentId = id;
    this.student1stName = fname;
    this.studentLastName = lname;
  }

  fullName() {
    return this.student1stName + " " + this.studentLastName;
  }
}

var parentInfo = new ParentInformation("Sunil", "sabitri");
var studentOne = new StudentInformation(01, "Niloy", "Paul", "manik", "komola");

console.log(studentOne);

const person = {
  name: "oshan",
  adress: "alkaran",
  age: 13,
  mobile: "01717171717",
  friend: ["asasa", "asa", "asasa", "aasas"],
};

const { name, adress, age } = person;

const friendsName = ["robin", "tom", "saif", "liton", "dipa", "tuheen", "eqra"];

const [frnd1, frnd2, ...restFrnd] = friendsName;

console.log(restFrnd);

function sum(a, b = 9) {
  return a + b;
}

const total = sum(9);

console.log(total);
