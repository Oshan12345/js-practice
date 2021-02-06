const employee1 = {
  fname: "Maruf",
  lname: "Hossain",
  salary: 50000,
  fullName: function () {
    return this.fname + " " + this.lname;
  },
  chargeBill: function (charge, tax = 0) {
    console.log(this);
    this.salary = this.salary - charge - tax;
    return this.salary;
  },
};

console.log(employee1.fullName());

const charge = employee1.chargeBill(2000);

console.log(employee1.salary);

const employee2 = {
  fname: "Tuheen",
  lname: "Bokshi",
  salary: 30000,
};

// method  binding

const chargeEmployee2 = employee1.chargeBill.bind(employee2);

chargeEmployee2(3000);

console.log(employee2.salary);

//call method

const employee3 = {
  fname: "tania",
  lname: "sultana",
  salary: 70000,
};
employee1.chargeBill.call(employee3, 6000, 90);

console.log(employee3.salary);

//apply method

const employee4 = {
  fname: "razia",
  lname: "sultana",
  salary: 70000,
};
employee1.chargeBill.apply(employee4, [5000, 30]);

console.log(employee4.salary);
