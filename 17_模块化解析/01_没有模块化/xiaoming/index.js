const moduleB = (function () {
  var name = "xiaoming";
  var age = "20";
  function multiplication(num1, num2) {
    return num1 * num2;
  }

  return {
    name,
    age,
    multiplication,
  };
})();
