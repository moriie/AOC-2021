let n = 0
let j = 0
let arr;
let len;
let strLen;
let gamma = "";
let epsilon = "";
let count = 0;


const Answer = () => {
  fetch("./values.txt")
  .then((res) => res.text())
  .then((txt) => {
    arr = txt.split("\n")
    len = arr.length;
    strLen = arr[0].length

    for (; j < strLen-1; j++) {
      for (n = 0; n < len; n++){
        if (arr[n][j] === "1"){
          count++
        }  
        else if (arr[n][j] === "0"){
          count--
        }
      }
      if (count > 0){
        gamma=gamma+"1"
        epsilon=epsilon+"0"
      }
      else {
        gamma=gamma+"0"
        epsilon=epsilon+"1"
      }
      count = 0;
    }
    console.log(gamma, epsilon)
    console.log(("0b"+gamma)*("0b"+epsilon))
  })    
};
Answer();