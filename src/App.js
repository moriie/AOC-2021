import './App.css';

function App() {
  let arr = [];
  let n;
  let j;
  let testArr;
  let ans = 0;


  const Answer = () => {

    fetch("./values.txt")
    .then((res) => res.text())
    .then((txt) => {
      testArr = txt.split(",")

      

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
