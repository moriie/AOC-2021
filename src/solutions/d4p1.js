let n = 0;
let j = 0;
let k;
let arr;
let numArr;
let rowArr;
let wsregex = /\s+/
let countArr = [];
let numIndex;
let finished = false;
let ans = "";

const Answer = () => {
  fetch("./values.txt")
  .then((res) => res.text())
  .then((txt) => {
    arr = txt.split("\r\n").filter((val)=>val!=="")
    numArr = arr.splice(0,1)[0].split(",")
  
    for (;n < numArr.length; n++){
      if (finished){
        break
      }
      for (j = 0; j < arr.length; j++){
        if (finished){
          break
        }

        if (!countArr[j%5+Math.floor(j/5)*10]){
          countArr[j%5+Math.floor(j/5)*10] = 0
        }

        rowArr = arr[j].trim().split(wsregex)

        if (rowArr.includes(numArr[n])){

          numIndex = rowArr.indexOf(numArr[n])

          countArr[j%5+Math.floor(j/5)*10]++

          if (!countArr[5+Math.floor(j/5)*10+numIndex]){
            countArr[5+Math.floor(j/5)*10+numIndex] = 1
            console.log(5+Math.floor(j/5)*10+numIndex)
            // console.log(rowArr, numArr[n], numIndex, j+5+Math.floor(j/5)*5+numIndex) 
          }
          else {
            countArr[5+Math.floor(j/5)*10+numIndex]++
          }

          if (countArr[j%5+Math.floor(j/5)*10] === 5 || countArr[5+Math.floor(j/5)*10+numIndex] === 5){
            finished = true;
            console.log(rowArr, j, countArr[j%5+Math.floor(j/5)*10], countArr[5+Math.floor(j/5)*10+numIndex])
            console.log(numArr[n], n)
            
            for (k = Math.floor(j/5)*5; k < Math.floor(j/5)*5+5; k++){
              ans = ans + arr[k].trim() + " ";
            }

            ans = ans.trim().split(wsregex)

            for (k = 0; k <= n; k++){
              ans = ans.filter(val => val !== numArr[k])
            }
            console.log(ans.reduce((a,b)=>parseInt(a)+parseInt(b))*numArr[n])
            // console.log(ans.trim().split(wsregex))
          }
          
        }
      }
    }
    // console.log(countArr)
  })
};
Answer();