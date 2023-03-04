import Notiflix from "notiflix";

// 1.Відслідковування подій;
const refs = {
  body: document.querySelector('body'),
  form: document.querySelector('form.form'),
  delay: document.querySelector('[name="delay"]'),
  step: document.querySelector('[name="step"]'),
  amount: document.querySelector('[name="amount"]'),
  button: document.querySelector('[type="submit"]'),
}

// 2.Відправка форми;
refs.button.addEventListener('click', onPromiseCreate)

function onPromiseCreate(elem){
  elem.preventDefault(); 
  
  let valueDelay = Number(refs.delay.value);
  let step = Number(refs.step.value);
  let amount = Number(refs.amount.value);

  console.log(valueDelay, step, amount );

  //3. Запуск повідомлення
  for (let i = 1; i <= amount; i += 1){
    let promiseDelay = valueDelay + step * i; 

    createPromise(i, promiseDelay) 
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`, {useIcon: false,});
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`, {useIcon: false,});
    });
  };
};
// 4.Виклик функції
function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  })
}

