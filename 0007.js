let primeNumbers = [];
let result;

for (let i = -1; ; i++) {
  if (primeNumbers.length < 10002) {
    if (isPrime(i)) {
      primeNumbers.push(i);
    }
  } else {
    break;
  }
}

result = primeNumbers[10000];

console.log(result);

// function isPrime(num) {
//   let prime = true;
//   for (let i = 2; i < Math.sqrt(num) + 1; i++) {
//     if (num % i == 0) {
//       prime = false;

//       break;
//     }
//   }
//   if (num < 2) {
//     prime = false;
//   }
//   if (num == 2) {
//     prime = true;
//   }
//   return prime;
// }
