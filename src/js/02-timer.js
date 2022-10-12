import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
require('flatpickr/dist/themes/light.css');

let userDate = null;
let timerInterval = null;

const refs = {
  dateTimeField: document.querySelector('input#datetime-picker'),
  startBtn: document.querySelector('[data-start]'),
  daysField: document.querySelector('[data-days]'),
  hoursField: document.querySelector('[data-hours]'),
  minutesField: document.querySelector('[data-minutes]'),
  secondsField: document.querySelector('[data-seconds]'),
};
const {
  dateTimeField: dateTimeInput,
  startBtn,
  daysField: daysInput,
  hoursField: hoursInput,
  minutesField: minutesInput,
  secondsField: secondsInput,
} = refs;

timerStyle();
function timerStyle() {
  const timerContainerStyle = document.querySelector('.timer').style;
  timerContainerStyle.display = 'flex';
  timerContainerStyle.gap = '1%';

  document.querySelectorAll('.field').forEach(item => {
    const { style } = item;
    style.display = 'flex';
    style.flexDirection = 'column';
    style.alignItems = 'center';
    style.gap = '10%';
  });
}

startBtn.disabled = true;
const options = {
  enableTime: true,
  time_24hr: true,
  minuteIncrement: 1,
  defaultDate: new Date(),
  onClose([selectedDate]) {
    if (!selectedDate || selectedDate < options['defaultDate']) {
      Notify.failure('Please choose Date in the future!');
      return;
    }
    userDate = selectedDate;
    startBtn.disabled = false;
  },
};

flatpickr(dateTimeInput, options);

const addLeadingZero = value => String(value).padStart(2, 0);

const convertMs = ms => {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
};

const updateTimer = () => {
  const timerValue = userDate - Date.now();
  if (timerValue <= 0) {
    clearInterval(timerInterval);
    return;
  }

  const { days, hours, minutes, seconds } = convertMs(timerValue);

  daysInput.textContent = addLeadingZero(days);
  hoursInput.textContent = addLeadingZero(hours);
  minutesInput.textContent = addLeadingZero(minutes);
  secondsInput.textContent = addLeadingZero(seconds);
};

const start = () => {
  updateTimer();
  timerInterval = setInterval(updateTimer, 1000);
  dateTimeInput.disabled = true;
  startBtn.disabled = true;
};

const onStartBtn = () => {
  const currentDate = new Date();

  if (userDate < currentDate) {
    Notify.failure('Please choose Date in the future!');
    return;
  }

  start();
};

startBtn.addEventListener('click', onStartBtn);
