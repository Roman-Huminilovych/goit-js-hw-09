const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
let interval;

startBtn.addEventListener('click', changeColorOnBody);
stopBtn.addEventListener('click', stopChangeColor);
buttonsGrowPlease();

function buttonsGrowPlease() {
  let buttons = document.querySelectorAll('button');
  buttons.forEach(btn => {
    btn.style.width = '100px';
    btn.style.height = '60px';
  });
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeColorOnBody() {
  interval = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  startBtn.disabled = true;
}

function stopChangeColor() {
  clearInterval(interval);
  startBtn.disabled = false;
}
