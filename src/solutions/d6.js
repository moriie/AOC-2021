let arr = [];
let n;
let j;
let len;
let testArr;
let ansArr = [0,0,0,0,0,0,0,0,0];
let ans = 0;
let plchlder;

const Answer = () => {
  fetch("./values.txt")
  .then((res) => res.text())
  .then((txt) => {
    testArr = txt.split(",")
    testArr.forEach(val=>{
      ansArr[val]++
    })

    for (n = 0; n < 256; n++){
      for (j = 0; j <= 8; j++){
        if (j === 0){
          plchlder = ansArr[0]
          ansArr[0] = 0;
        }
        else {
          ansArr[j-1] = ansArr[j]
          ansArr[j] = 0;
        }
      }
      ansArr[6] = ansArr[6] + plchlder;
      ansArr[8] = plchlder;
    }
    console.log(ansArr.reduce((a,b)=>a+b))
  })
}
Answer()
