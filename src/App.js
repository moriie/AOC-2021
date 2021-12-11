import './App.css';

function App() {
  let arr;
  let n;
  let j;
  let rgx = /[0-9]+/g
  let testArr;
  let ansArr = {};
  let ans = 0;


  const Answer = () => {
    fetch("./values.txt")
    .then((res) => res.text())
    .then((txt) => {
      arr = txt.split("\r\n")
      for (n = 0; n < arr.length; n++){
        testArr = arr[n].match(rgx)
        // console.log(testArr)
        if (testArr[0] !== testArr[2] && testArr[1] !== testArr[3]){
          continue
        }
        else if (testArr[0] === testArr[2]){
          if (!ansArr[testArr[0]]){
            ansArr[testArr[0]] = {}
          }
          if (testArr[1] < testArr[3]){
            for (j = testArr[1]; j <= testArr[3]; j++){
              if (!ansArr[testArr[0]][j]){
                ansArr[testArr[0]][j] = 1
              }
              else{
                ansArr[testArr[0]][j]++
              }
            }
          }
          else if (testArr[1] > testArr[3]){
            for (j = testArr[3]; j <=testArr[1]; j++){
              if (!ansArr[testArr[0]][j]){
                ansArr[testArr[0]][j] = 1
              }
              else{
                ansArr[testArr[0]][j]++
              }
            }
          }
        }
        else if (testArr[1] === testArr[3]){
          if (!ansArr[testArr[1]]){
            ansArr[testArr[1]] = {}
          }
          if (testArr[0] < testArr[2]){
            for (j = testArr[0]; j <= testArr[2]; j++){
              if (!ansArr[testArr[1]][j]){
                ansArr[testArr[1]][j] = 1
              }
              else{
                ansArr[testArr[1]][j]++
              }
            }
          }
          else if (testArr[0] > testArr[2]){
            for (j = testArr[2]; j <=testArr[0]; j++){
              if (!ansArr[testArr[1]][j]){
                ansArr[testArr[1]][j] = 1
              }
              else{
                ansArr[testArr[1]][j]++
              }
            }
          }
        }
      }
      Object.values(ansArr).forEach(obj=>{
        Object.values(obj).forEach((val)=>{
          if (val > 1){
            ans++
          }
        })
      })
      console.log(ans)
    })
  };
  Answer();


  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
