let result = 0;
for (let i = 0; i < 1000; i++) {
  if (i % 3 == 0) {
    result += i;
  }
  if (i % 5 == 0) {
    result += i;
  }
  if (i % 15 == 0) {
    result -= i;
  }
}

console.log(result);
