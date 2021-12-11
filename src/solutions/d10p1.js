let arr;
let n;
let j;
let ansArr=[];
let testArr;
let ans = 0;
let finished = false;


const Answer = () => {
  fetch("./values.txt")
  .then((res) => res.text())
  .then((txt) => {
    arr = txt.split("\r\n")
    for (n = 0; n < arr.length; n++){
      testArr = arr[n].split("")
      finished = false;
      for (j = 0; j < testArr.length; j++){
        if (finished === true){
          break
        }
        if ((testArr[j] === ">" && testArr[j-1] === "<") || (testArr[j] === ")" && testArr[j-1] === "(") || (testArr[j] === "]" && testArr[j-1] === "[") || (testArr[j] === "}" && testArr[j-1] === "{")){
          // console.log(testArr, j)
          // console.log(testArr[j], testArr[j-1])
          testArr.splice(j-1,2)
          j = j-2
          // console.log(testArr, j)
        }
        else if (testArr[j] === ">" || testArr[j] === ")" || testArr[j] === "]" || testArr[j] === "}"){
          ansArr.push(testArr[j])
          finished = true;
        }
      }
      // break
    }
    // console.log(ansArr)
    for (n = 0; n < ansArr.length; n++){
      if (ansArr[n] === ")"){
        ans = ans + 3
      }
      else if (ansArr[n] === "]"){
        ans = ans + 57
      }
      else if (ansArr[n] === "}"){
        ans = ans + 1197
      }
      else {
        ans = ans + 25137
      }
    }
    console.log(ans)
  })
};
Answer();