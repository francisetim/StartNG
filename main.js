 
let fullName = document.getElementById('fullname');
let email = document.getElementById('email');
let message = document.getElementById('message');

const validateName = () => {
    if ((fullName.value.length <= 4) && (fullName.value == "")) {
        alert('Please enter your full name');
        fullName.focus();
        return false();
    } 
}

const validateEmail = () => {
    if (email.value.length >= 5 && email.value.includes('@') && email.value.includes('.')) {
        return true; 
    } else { 
        alert('Please enter your email');
        email.focus();
        return false;
    } 
}

const validateMessage = () => {
    if ((message.value.length <= 20) && (message.value == "")){
        alert('Message too short! minimum character length is 20');
        message.focus();
        return false;
    }
}

const validateForm = () => {
    validateName();
    validateEmail();
    validateMessage();
    return true;
}






