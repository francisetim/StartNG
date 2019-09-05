 
let fullName = document.getElementById('fullname');
let email = document.getElementById('email');
let subject = document.getElementById('subject');
let message = document.getElementById('message');

const validateName = () => {
    if (fullName.length >= 4) {
        return true;
    } else {
        return false;
    }

}

const validateEmail = () => {
    if (message.length >= 5 && email.includes('@') && email.includes('.')) {
        return true;
    } else {
        return false;
    }
}

const validateMessage = () => {
    if (message.length >= 20) {
        return true;
    } else {
        return false;
    }
}






