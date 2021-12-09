let n = 0
let j = 0
let arr;
let strLen;
let oxygen = [];
let oxygenval;
let carbon = [];
let carbonval;
let count = 0;


const Answer = () => {
  fetch("./values.txt")
  .then((res) => res.text())
  .then((txt) => {
    arr = txt.split("\n")
    
    strLen = arr[0].length

    //Finding O2
    for (j = 0; j < strLen-1; j++) {
      for (n = 0; n < arr.length; n++){
        if (arr[n][j] === "1"){
          count++
        }  
        else if (arr[n][j] === "0"){
          count--
        }
      }
      if (arr.length > 1){
        if (count > 0 || count === 0){
          oxygen = arr.filter(val=>val[j] === "1")
        }
        else {
          oxygen = arr.filter(val=>val[j] === "0")
        }
      }
      count = 0;
      arr = oxygen;
    }
    console.log(oxygen)
    oxygenval = parseInt(arr[0],2)
    arr = txt.split("\n")

    //Finding C02
    for (j = 0; j < strLen-1; j++) {
      for (n = 0; n < arr.length; n++){
        if (arr[n][j] === "1"){
          count++
        }  
        else if (arr[n][j] === "0"){
          count--
        }
      }
      if (arr.length > 1){
        if (count > 0 || count === 0 ){
          carbon = arr.filter(val=>val[j] === "0")
        }
        else {
          carbon = arr.filter(val=>val[j] === "1")
        }
      }
      count = 0;
      arr = carbon;
      console.log(carbon)
    }
    console.log(carbon)
    carbonval = parseInt(arr[0],2)

    console.log(oxygenval*carbonval)
  })    
};
Answer();