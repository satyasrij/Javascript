function isEven(number) {
  return number % 2 === 0;
}

console.log(isEven(6));
console.log(isEven(3));
console.log(isEven(0));
console.log(isEven(-1));

function calculateFactorial(number) {
  var factorial = 1;

  if (number === 0 || number === 1) {
    return factorial;
  } else {
    for (let i = 2; i <= number; i++) {
      factorial *= i;
    }
    return factorial;
  }
}
console.log(calculateFactorial(6));
console.log(calculateFactorial(0));
console.log(calculateFactorial(1));
