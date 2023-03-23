let result;

result = square(sumOfNumbers(100)) - squareUntil(100);

console.log(Math.abs(result));

function squareUntil(number) {
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    sum += i * i;
  }

  return sum;
}

function square(num) {
  return num * num;
}
function sumOfNumbers(index) {
  let sum = 0;
  for (let i = 1; i <= index; i++) {
    sum += i;
  }

  return sum;
}
