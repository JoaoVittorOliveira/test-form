const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
});


function checkInputs(){
    // trim to remove whitespaces
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue == ''){
        setErrorFor(username, 'Não pode estar vazio!')
    } else {
        setSucessFor(username)
    }

    if(emailValue == ''){
        setErrorFor(email, 'Não pode estar vazio!')
    } else if(!isEmail(emailValue)){
        setErrorFor(email, 'Invalido!')
    } else{
        setSucessFor(email)
    }
    
    if(passwordValue == ''){
        setErrorFor(password, 'Não pode estar vazio!')
    } else {
        setSucessFor(password)
    }

    if(password2Value == ''){
        setErrorFor(password2, 'Não pode estar vazio!')
    } else {
        setSucessFor(password2)
    }

}

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'inputs error';
    small.innerText = message;
}

function setSucessFor(input, message){
    const formControl = input.parentElement;
    formControl.className = 'inputs sucess';
}

function isEmail(email){
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}