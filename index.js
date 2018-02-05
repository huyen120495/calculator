//const Addition = require("./operators/Addition.js");
//const Subtraction = require("./operators/Subtraction.js");
//const Division = require("./operators/Division.js");
//const Multiplication = require("./operators/Multiplication.js");

const operators = require("./operators");

class Calculator {
 constructor() {
  this.operators = {};
 }

 addOperator(operatorName, operator) {
  this.operators[operatorName] = operator;
  return this;
 }

 run(operatorName, num1, num2) {
  return this.operators[operatorName].run(num1, num2);
 }
}

let Calculate = new Calculator();
//Calculate
// .addOperator("cong", new Addition)
// .addOperator("tru", new Subtraction)
// .addOperator("nhan", new Multiplication)
// .addOperator("chia", new Division)
//;

Calculate
 .addOperator("cong", new operators.Addition)
 .addOperator("tru", new operators.Subtraction)
 .addOperator("nhan", new operators.Multiplication)
 .addOperator("chia", new operators.Division)
;

console.log(Calculate.run("cong", 7, 9));
console.log(Calculate.run("tru", 7, 9));
console.log(Calculate.run("nhan", 7, 9));
console.log(Calculate.run("chia", 7, 9));
try {
 console.log(Calculate.run("chia", 7, 0));
} catch (e) {
 console.log(e);
}
