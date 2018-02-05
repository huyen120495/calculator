class Division {
 run (num1, num2) {
  if (num2 == 0) throw "Division by zero";
  return num1 / num2;
 }
}

module.exports = Division;
