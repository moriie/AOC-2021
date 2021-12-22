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
}
Answer()