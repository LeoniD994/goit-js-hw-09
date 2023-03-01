// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';
// 1.Пошук елементів;
const btnStart = document.querySelector('button[data-start]');
const inputWindow = document.querySelector("#datetime-picker");
const days = document.querySelector('span[data-days]');
const hours = document.querySelector('span[data-hours]');
const minutes = document.querySelector('span[data-minutes]');
const seconds = document.querySelector('span[data-seconds]');

// 2.Підключення календаря;
btnStart.disabled = true;
let countdown ; 
const DELAY = 1000;
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) { 
    if (selectedDates[0] < new Date()) {
        Notiflix.Notify.failure('Please choose a date in the future',{width:'350px', borderRadius: '10px', position: 'center-center',clickToClose: true, useIcon: false,});// Повідомлення помилка
        btnStart.disabled = true;
        
    } else {
        countdown = selectedDates[0] - new Date(); 
        btnStart.disabled = false;
    }
    },
};
flatpickr(inputWindow, options);
// 3.Підрахунок значень;
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
// 4.Додавання слухача подій;
btnStart.addEventListener('click', startCoint);

function startCoint() {
    btnStart.disabled = true; 
    btnStart.style.background = 'white';
    inputWindow.disabled = true; 
    let timeObject = convertMs(countdown);

    timerId = setInterval(() => {

        
        if (countdown >= 999) {
            
            if (countdown <= 60999){
                days.style.color = 'red';
                hours.style.color = 'red';
                minutes.style.color = 'red';
                seconds.style.color = 'red';
            }
        btnStart.disabled = true;    
        countdown -= 1000;
        let timeObject = convertMs(countdown);
        padStart(timeObject);

        } else {
            Notiflix.Notify.success('Time is up...',{width:'350px', borderRadius: '10px', position: 'center-center',clickToClose: true, useIcon: false,}); // повідомлення про завершення підрахунку
            clearInterval(timerId); 
            inputWindow.disabled = false;

            days.style.color = 'black';
            hours.style.color = 'black';
            minutes.style.color = 'black';
            seconds.style.color = 'black';
        };
    }, DELAY); 

};
// 5.Значення таймера на сторінці;
function padStart(evt){
    days.textContent = evt.days;
    hours.textContent = evt.hours;
    minutes.textContent = evt.minutes;
    seconds.textContent = evt.seconds;
}

