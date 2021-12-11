let arr;
let n;
let j;
let k;
let ansArr=[];
let testArr;
let scoreArr=[];
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
          testArr.splice(j-1,2)
          j = j-2
        }
        else if (testArr[j] === ">" || testArr[j] === ")" || testArr[j] === "]" || testArr[j] === "}"){
          // ansArr.push(testArr[j])
          finished = true;
        }
        else if (j === testArr.length-1){
          ansArr.push(testArr)
        }
      }
      // break
    }
    for (n = 0; n < ansArr.length; n++){
      testArr = ansArr[n]
      ans = 0
      for (let k = testArr.length-1; k >= 0; k--){
        ans = ans*5
        if (testArr[k] === "("){
          ans = ans+1
        }
        else if (testArr[k] === "["){
          ans = ans+2
        }
        else if (testArr[k] === "{"){
          ans = ans+3
        }
        else if (testArr[k] === "<"){
          ans = ans+4
        }
      }
      scoreArr.push(ans)
    }
    console.log(scoreArr.sort((a,b)=>a-b)[Math.floor(scoreArr.length/2)])
  })
};
Answer();