let first = 0;
let second = 1;
let arr = [first, second]
let total = 0;

for (let i = 0; i < 50; i++) {
    if ((arr[i + 1] + arr[i]) > 4000000) {
        break;
    }
    else {
        arr[i + 2] = (arr[i + 1] + arr[i])
    }
}

let sum = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        sum += arr[i]

    }
}
console.log(sum)
