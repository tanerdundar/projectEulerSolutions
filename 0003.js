let number = 600851475143;
let primeFactors = [];
let biggestPrime;
for (let i = 2; i < Math.floor(Math.sqrt(number)) + 1; i++) {
  if (number % i == 0) {
    if (isPrime(number / i)) {
      primeFactors.push(number / i);
    }
    if (isPrime(i)) {
      primeFactors.push(i);
    }
  }
}
let result = 0;
for (let i = 0; i < primeFactors.length; i++) {
  if (primeFactors[i] > result) {
    result = primeFactors[i];
  }
}
console.log(result);

function isPrime(number) {
  let isPrime = true;
  for (let i = 2; i < Math.floor(Math.sqrt(number)) + 1; i++) {
    if (number % i == 0) {
      isPrime = false;
      break;
    }
  }
  return isPrime;
}
