let n = 0
let arr;
let len;
let dir;
let steps;
let x = 0;
let z = 0;
let depth = 0;

const Answer = () => {
  fetch("./values.txt")
    .then((res) => res.text())
    .then((txt) => {
      arr = txt.split("\n")
      len = arr.length;

      for (; n < len; n++) {
        dir = arr[n].split(" ")[0]
        steps = parseInt(arr[n].split(" ")[1])
        switch(dir){
          case "up":
            z = z-steps;
            break;
          case "down":
            z = z+steps;
            break;
          default:
            x = x+steps;
            depth = depth+z*steps
        }
      }
      console.log(x*depth)
    })
};
Answer();