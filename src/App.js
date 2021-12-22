import './App.css';

function App() {
  let arr = [];
  let n;
  let j;
  let testArr;
  let ans = 0;
  let pos1 = 8;
  let pos2 = 9;
  let score1 = 0;
  let score2 = 0;
  let turn = true
  let dice = 1;
  let rolls = 0;

  const rollDice = (pos) => {
    let r1 = dice;
    checkDice()
    let r2 = dice;
    checkDice()
    let r3 = dice;
    checkDice()

    pos = (pos+r1+r2+r3)%10
    return pos === 0 ? 10 : pos

  }
  const checkDice = () => {
    if (dice === 100){
      dice = 1;
    }
    else {
      dice++
    }
  }

  const Answer = () => {

    while (score1 < 1000 && score2 < 1000){
      if (turn){
        pos1 = rollDice(pos1);
        score1 = score1+pos1;
      }
      else {
        pos2 = rollDice(pos2);
        score2 = score2+pos2;
      }
      turn = !turn
      rolls=rolls+3
    }
    console.log(score1, score2, rolls)
    // fetch("./values.txt")
    // .then((res) => res.text())
    // .then((txt) => {
      // testArr = txt.split(",")

      
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
    // })
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
