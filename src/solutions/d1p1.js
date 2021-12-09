let count = 0;
let n = 0;
let arr;
let len;


const Answer = () => {
  fetch("./values.txt")
    .then((res) => res.text())
    .then((txt) => {
      arr = txt.split("\n");
      len = arr.length;
      for (; n < len; n++) {
        if (arr[n] > arr[n - 1]) {
          count++;
          // console.log(count)
        }
      }
    })
};
Answer();