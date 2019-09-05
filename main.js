 
let fullName = document.getElementById('fullname').value;
let email = document.getElementById('email').value;
let message = document.getElementById('message').value;

const validateName = () => {
    if (fullName.length <= 4) {
        alert('Please enter your full name');
        fullName.focus();
        return false;
    } 
}

const validateEmail = () => {
    if (email.length >= 5 && email.includes('@') && email.includes('.')) {
        return true; 
    } else { 
        alert('Please enter your email');
        email.focus();
        return false;
    } 
}

const validateMessage = () => {
    if (message.length <= 20) {
        alert('Message too short! Increase message length');
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







