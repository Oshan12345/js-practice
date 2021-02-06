// class ParentInformation {
//   constructor(fatherName, motherName) {
//     this.fatherName = fatherName;
//     this.motherName = motherName;
//   }
// }

// class StudentInformation extends ParentInformation {
//   constructor(id, fname, lname, fatherName, motherName) {
//     super(fatherName, motherName);
//     this.studentId = id;
//     this.student1stName = fname;
//     this.studentLastName = lname;
//   }

//   fullName() {
//     return this.student1stName + " " + this.studentLastName;
//   }
// }

// var parentInfo = new ParentInformation("Sunil", "sabitri");
// var studentOne = new StudentInformation(01, "Niloy", "Paul", "manik", "komola");

// console.log(studentOne);

// const person = {
//   name: "oshan",
//   adress: "alkaran",
//   age: 13,
//   mobile: "01717171717",
//   friend: ["asasa", "asa", "asasa", "aasas"],
// };

// const { name, adress, age } = person;
// const friendsName = ["robin", "tom", "saif", "liton", "dipa", "tuheen", "eqra"];
// const [frnd1, frnd2, ...restFrnd] = friendsName;

// console.log(restFrnd);

// function sum(a, b = 9) {
//   return a + b;
// }

// const total = sum(9);

// console.log(total);

const employee1 = {
  fname: "Maruf",
  lname: "Hossain",
  salary: "50000",
  fullName: function () {
    return this.fname + " " + this.lname;
  },
  chargeBill: function (charge, tax = 0) {
    console.log(this);
    this.salary = this.salary - charge - tax;
    return this.salary;
  },
};

// var fullName = employee1.fullName();
// var x = employee1.chargeBill(6000, 888);
// console.log(x);
// console.log(fullName);
// console.log(employee1.salary);

class Employee {
  constructor(firstName, lastName, salary = 0) {
    (this.firstName = firstName),
      (this.lastName = lastName),
      (this.fullName = firstName + " " + lastName);
    this.salary = salary;
  }
  chargeBill(charge, tax = 0) {
    console.log(this);
    this.salary = this.salary - charge - tax;
    return this.salary;
  }

  bonus(rate = 0) {
    this.salary = this.salary + this.salary * rate;

    return this.salary;
  }
}

const employee2 = new Employee("diptom", "das", 90000);
// console.log(employee2.chargeBill(10000));
// employee2.bonus(0.2);
// console.log(employee2);

console.log(employee2);

employee1.chargeBill.call(employee2, 10000, 800);
console.log(employee2);
