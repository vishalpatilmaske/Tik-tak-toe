let boxs = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let winner = document.querySelector("#winner");
let turn0 = true; //chek the which user are palying

let winpattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];
const disable = () => {
  for (let box of boxs) {
    box.disabled = true;
  }
};
const resetGame = () => {
  for (let box of boxs) {
    box.innerText = "";
    box.disabled = false;
  }
};
resetGame();
boxs.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0) {
      box.innerHTML = "O";
      turn0 = false;
    } else {
      box.innerHTML = "X";
      turn0 = true;
    }
    box.disabled = true;
    chekwinner();
  });
});
function chekwinner() {
  for (let pattern of winpattern) {
    let posvalue1 = boxs[pattern[0]].innerText;
    let posvalue2 = boxs[pattern[1]].innerText;
    let posvalue3 = boxs[pattern[2]].innerText;
    if (posvalue1 != "" && posvalue2 != "" && posvalue2 != "") {
      if (posvalue1 === posvalue2 && posvalue2 === posvalue3) {
        winner.innerText = `Congratulations ${posvalue1} is winner`;
        winner.style.color = "green";
        disable();
      }
    }
  }
}

reset.addEventListener("click", () => {
  resetGame();
});
