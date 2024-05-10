const formData = {
    email: "",
    message: ""
};

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');


function renderPage() {
    const storedData = localStorage.getItem('feedback-form-state');
    if (storedData) {
    const parsedData = JSON.parse(storedData);
    emailInput.value = parsedData.email;
    messageInput.value = parsedData.message;
    }
}
renderPage()

form.addEventListener('input', (event) => {
    const { name, value } = event.target;
    formData[name] = value;

    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});


form.addEventListener('submit', (event) => {
    event.preventDefault();


    if (formData.email === "" || formData.message === "") {
    alert('Fill please all fields');
    return;
    }


    console.log(formData);
    localStorage.clear();
    form.reset()
});