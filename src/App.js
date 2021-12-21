import './App.css';

function App() {
  let arr = [];
  let n;
  let j;
  let len;
  let testArr;
  let ans = 0;

  const Answer = () => {
    fetch("./values.txt")
    .then((res) => res.text())
    .then((txt) => {
      testArr = txt.split(",")
      
      // testArr.forEach((str, index)=>{
  //       arr[index] = str.split('')
  //     })
  //     for (n = 0; n < 100; n++){
  //       arr.forEach((row, y)=>{
  //         row.forEach((val, x)=>{
  //           arr[y][x]++
  //           if (arr[y][x] >= 10){
  //             Flash(y, x)
  //           }
  //         })
  //         row.forEach((val,x)=>{
            
  //         })
  //       })
  //     }
  //     console.log(ans)
  //   })
  // };

  // const Flash = (y,x) => {
  //   arr[y][x] = 0;
  //   ans++

  //   for (let j = y-1; j <= y+1; j++){
  //     if (j < 0 || j > 9){
  //       continue
  //     }
  //     for (let k = x-1; k <= x+1; k++){
  //       if (k < 0 || k > 9){
  //         continue
  //       }
  //       arr[j][k]++
  //       if (arr[j][k] >= 10){
          // console.log(j,k)
          // console.log(arr)
  //         Flash(j,k)
  //       }
  //     }
    })
  }

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
