import './App.css';

function App() {

  let n = 0;
  let j = 0;
  let arr;
  let numArr;
  let rowArr;
  let wsregex = /\s+/
  let countArr = [];



  const Answer = () => {
    fetch("./values.txt")
    .then((res) => res.text())
    .then((txt) => {
      arr = txt.split("\r\n").filter((val)=>val!=="")
      numArr = arr.splice(0,1)[0].split(",")
    
      for (;n < numArr.length; n++){
        for (j = 0; j < arr.length; j++){
          rowArr = arr[j].trim().split(wsregex)
          console.log(rowArr)
        }
      }
    })
  };
  Answer();


  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
