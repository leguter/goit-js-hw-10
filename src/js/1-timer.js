import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
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
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      userSelectedDate = selectedDates[0];
      if (userSelectedDate < new Date()) {
          window.alert('Please choose a date in the future');
          refs.btnStart.disabled = true;
          refs.btnStart.classList.remove('btn-right-data');
      } else {
          refs.btnStart.disabled = false;
          refs.btnStart.classList.add('btn-right-data')
          
      }
      console.log(userSelectedDate);
  },
};
const differenceTime = userSelectedDate - Date.now();
refs.btnStart.addEventListener('click', () => {
    // while (refs.secondsEl !== '00') {
    //     refs.btnStart.disabled = true;
    //     refs.btnStart.classList.remove('btn-right-data');
    // }
    intervalId = setInterval(() => {
      
  }, 1000)
})
flatpickr("#datetime-picker", options);
function convertMs(ms) {
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

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
console.log(convertMs(userSelectedDate));