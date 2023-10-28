const displayMe = document.getElementById("display-me");
const displayYou = document.getElementById("display-you");
const ButtonJanken = document.getElementById("button-janken");
const displayResult = document.getElementById("display-result");
ButtonJanken.onclick = function () {
  var me = Math.floor(Math.random() * 3);

  var you = Math.floor(Math.random() * 3);

  if (me == 0) {
    displayMe.textContent = "グー";
  } else if (me == 1) {
    displayMe.textContent = "チョキ";
  } else {
    displayMe.textContent = "パー";
  }
  if (you == 0) {
    displayYou.textContent = "グー";
  } else if (you == 1) {
    displayYou.textContent = "チョキ";
  } else {
    displayYou.textContent = "パー";
  }
  if (me == you) {
    displayResult.textContent = "あいこ";
  } else if (
    (me == 0 && you == 1) ||
    (me == 1 && you == 2) ||
    (me == 2 && you == 0)
  ) {
    displayResult.textContent = "勝ち";
  } else {
    displayResult.textContent = "負け";
  }
};
