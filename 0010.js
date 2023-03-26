let result = 1;
for (let i = 1; i < 2000000; i++) {
  if (isPrime(i)) {
    result += i;
  }
}

console.log(result);

function isPrime(num) {
  let prime = true;
  for (let i = 2; i < Math.sqrt(num) + 1; i++) {
    if (num % i == 0) {
      prime = false;

      break;
    }
  }
  if (num < 2) {
    prime = false;
  }
  if (num == 2) {
    prime = true;
  }
  return prime;
}
