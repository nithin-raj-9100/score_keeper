const display1 = document.querySelector("#display1");
const display2 = document.querySelector("#display2");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const reset = document.querySelector("#reset");
const select = document.querySelector("#select");
let score1 = 0;
let score2 = 0;
let winningScore = 3;
let isGameOver = false;

btn1.addEventListener("click", function () {
  if (!isGameOver) {
    score1 += 1;
    if (score1 === winningScore) {
      isGameOver = true;
      display1.classList.add("winner");
      display2.classList.add("runner");
      btn1.disabled = true;
      btn2.disabled = true;
    }
    display1.textContent = score1;
  }
});
btn2.addEventListener("click", function () {
  if (!isGameOver) {
    score2 += 1;
    if (score2 === winningScore) {
      isGameOver = true;
      display2.classList.add("winner");
      display1.classList.add("runner");
      btn1.disabled = true;
      btn2.disabled = true;
    }
    display2.textContent = score2;
  }
});

select.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  del();
});

reset.addEventListener("click", del);
function del() {
  display1.textContent = 0;
  display2.textContent = 0;
  score1 = 0;
  score2 = 0;
  isGameOver = false;
  display1.classList.remove("winner", "runner");
  display2.classList.remove("winner", "runner");
  btn1.disabled = false;
  btn2.disabled = false;
}
