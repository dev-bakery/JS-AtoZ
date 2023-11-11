class Employee {
  constructor(name, department, hoursPerMonth, payRate) {
    this.name = name;
    this.department = department;
    this.hoursPerMonth = hoursPerMonth;
    this.payRate = payRate;
  }

  calculate = () => {
    return this.hoursPerMonth * this.payRate;
  };
}
class FullTimeEmployee extends Employee {
  static payRate = 10000;
  constructor(name, department, hoursPerMonth) {
    super(name, department, hoursPerMonth, FullTimeEmployee.payRate);
  }
}
class PartTimeEmployee extends Employee {
  static payRate = 8000;
  constructor(name, department, hoursPerMonth) {
    super(name, department, hoursPerMonth, PartTimeEmployee.payRate);
  }
}

const elle = new FullTimeEmployee("elle", "s/w", 30);
const bob = new PartTimeEmployee("bob", "design", 20);
console.log(elle.calculate());
console.log(bob.calculate());
