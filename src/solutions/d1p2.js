let count = 0;
let n = 0
let arr;
let len;
let a;
let b;
let c;
let sum1;
let sum2;

const Answer = () => {
  fetch("./values.txt")
    .then((res) => res.text())
    .then((txt) => {
      arr = txt.split("\n").map(n=>parseInt(n));
      console.log(arr)
      len = arr.length;
      a = arr[0]
      b = arr[1]
      c = arr[2]
      sum1 = a + b + c;

      for (n = 3; n < len; n++) {
        sum2 = sum1-arr[n-3] + arr[n]
        if (sum1 < sum2) {
          count++;
        }
        sum1 = sum2
      }
      console.log(count)
    })
};
Answer();