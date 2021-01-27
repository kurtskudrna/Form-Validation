const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConf = document.getElementById('passwordConf');

function displayError(input, error) {
    const formContent = input.parentElement;
    formContent.classList.add('notValid');
    const small = formContent.querySelector('small');
    small.innerText = error

}

function valid(input) {
    const formContent = input.parentElement;
    formContent.classList.remove('notValid')
    formContent.classList.add('valid');
}

function isRequired(inputs) {
    inputs.forEach(function (input) {
        if (input.value.trim() === '') {
            displayError(input, `${uppercaseInput(input)} is required`);
        } else {
            valid(input)
        }
    });
}

function isLength(input, min, max) {
    if (input.value.length < min || input.value.length > max) {
        displayError(input, `${uppercaseInput(input)} must be between 8 - 32 Characters`)
    } else {
        valid(input)
    }
}
function matchPasswords(input1, input2) {
    if (input1.value !== input2.value) {
        displayError(input2, 'Passwords dont match')
    }
}

function uppercaseInput(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


form.addEventListener('submit', function (e) {
    e.preventDefault();

    isRequired([username, email, password, passwordConf])
    isLength(username, 8, 32);
    isLength(password, 8, 32);
    matchPasswords(password, passwordConf)



})


