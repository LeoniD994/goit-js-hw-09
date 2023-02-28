// 1. Отримання елементів запуску/зупинки кнопки;
const startRef = document.querySelector('[data-start]');
const stopRef = document.querySelector('[data-stop]');
const bodyRef = document.querySelector('body');
// 2. Додавання слухача подій start/stop на кнопки start/stop;
startRef.addEventListener('click', onStart);
stopRef.addEventListener('click', onStop);
// 3. Функція подій старту функції;
let timeId = null;
function onStart() {
    timeId = setInterval(getColor, 1000);
    startRef.toggleAttribute('disablet');
}
// 4. Функція подій зупинки функції;
function onStop(){
    clearInterval(timeId);
    startRef.removeAttribute('disablet');
}
// 5. Функція встановлює довільний колір bg;
function getColor() {
   bodyRef.style.backgroundColor =`#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
