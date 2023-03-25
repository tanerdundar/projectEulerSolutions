let a;
let b;
let c;
let result;

for (a = 0; a < 500; a++) {
  for (b = 0; b < 500; b++) {
    c = 1000 - (a + b);
    if (a * a + b * b == c * c && a < b && b < c) {
      result = a * b * c;
    }
  }
}

console.log(result);
