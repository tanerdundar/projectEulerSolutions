let palindromeProducts = [];
let result = 0;
for (let i = 100; i < 1000; i++) {
  for (let j = 100; j < 1000; j++) {
    let number = i * j;
    let numberToString = number.toString();
    if (numberToString.length == 6) {
      if (
        numberToString[0] == numberToString[5] &&
        numberToString[2] == numberToString[3] &&
        numberToString[1] == numberToString[4] &&
        numberToString > result
      ) {
        result = numberToString;
      }
    }
  }
}
console.log(result);
