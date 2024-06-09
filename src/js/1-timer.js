import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import closeIcon from '../img/close-icon.svg'
const refs = {
    btnStart: document.querySelector('.btn-start'),
    inputEl: document.querySelector('#datetime-picker'),
    daysEl: document.querySelector('[data-days]'),
    hoursEl: document.querySelector('[data-hours]'),
    minutesEl: document.querySelector('[data-minutes]'),
    secondsEl:document.querySelector('[data-seconds]'),
}
let userSelectedDate;
let intervalId;
refs.btnStart.disabled = true;
refs.btnStart.classList.remove('btn-right-data');
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      userSelectedDate = selectedDates[0];
      if (userSelectedDate < new Date()) {
        iziToast.show({
          title: 'Error',
          message: 'Illegal operaion',
          titleColor: '#fff',
          backgroundColor: '#ef4040',
          messageColor: '#fff',
          close: true,
          color: 'white',
          theme: 'dark',
          iconUrl: closeIcon,
          messageSize: '16px',
          titleSize: '16px',
          messageLineHeight: '1.5',
          titleLineHeight: '1.5',
          position: "topRight",
          transitionOut: 'fadeOut',
        });
          refs.btnStart.disabled = true;
          refs.btnStart.classList.remove('btn-right-data');
      } else {
          refs.btnStart.disabled = false;
          refs.btnStart.classList.add('btn-right-data')
          
      }
    console.log(userSelectedDate);
  },
};
let ms;
refs.btnStart.addEventListener('click', () => {
  // refs.btnStart.disabled = true;
  // refs.btnStart.classList.remove('btn-right-data');
  // refs.btnStart.disabled = true;
  // refs.inputEl.classList.remove('input-timer');
  // refs.inputEl.disabled = true;
  if (intervalId) clearInterval(intervalId);
    refs.btnStart.setAttribute('disabled', '');
    refs.btnStart.classList.remove('right-date');
    refs.inputEl.setAttribute('disabled', '');
  intervalId = setInterval(() => convertMs(ms), 1000);
});
flatpickr("#datetime-picker", options);
function convertMs(ms) {
  ms = userSelectedDate.getTime() - Date.now();
   if (ms < 0) {
        clearInterval(intervalId);
     refs.btnStart.disabled = false;
     refs.inputEl.disabled = false;
     refs.inputEl.classList.add('input-timer');
        return;
    };
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  // { days, hours, minutes, seconds };
  refs.daysEl.textContent = days.toString().padStart(2, '0');
  refs.hoursEl.textContent = hours.toString().padStart(2,'0');
  refs.minutesEl.textContent = minutes.toString().padStart(2, '0');
  refs.secondsEl.textContent = seconds.toString().padStart(2, '0');
  
}

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}