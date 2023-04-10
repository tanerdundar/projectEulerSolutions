let sum = 0;
let result = 0;

for (let i = 0; i < 3000000; i++) {
  sum += i;
  let divisorsOfSum = [];

  for (let j = 1; j < Math.sqrt(sum); j++) {
    if (sum % j == 0) {
      divisorsOfSum.push(j);
      divisorsOfSum.push(sum / j);
    }
  }
  if (divisorsOfSum.length > 500) {
    result = sum;
    break;
  }
}

console.log(result);
