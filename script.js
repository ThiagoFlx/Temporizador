var minute = 25;
let audio = new Audio("alarm.mp3");

function aumentarTimer() {
  minute++;
  document.getElementById("timer").innerHTML = minute + ":00";
}

function diminuirTimer() {
  minute--;
  document.getElementById("timer").innerHTML = minute + ":00";
}

function updateTime(timeInSecond) {
  // acessar html e atualizar o valor em minutos:segundos

  let minute = timeInSecond / 60;

  let minuteint = Math.trunc(minute);

  let seconds = timeInSecond % 60;

  // let time = minuteint.toString() + ":" + seconds.toString();

  let time = `${minuteint}:${seconds}`;
  document.getElementById("timer").innerHTML = time;
}

async function setDelay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function onStartPomodoro() {
  let timeInSecond = minute * 60;

  await setDelay(1000);
  while (timeInSecond > 0) {
    timeInSecond -= 1;
    updateTime(timeInSecond);
    await setDelay(1000);
  }

  audio.play();

  confirm("O tempo acabou");

}
