/***************************************************
 *      funciones de validación del formulario de
 *      validacionForm.js
 * 
 */

function eliminarError(fieldId) {
    document.getElementById(fieldId + 'Help').style.visibility = 'hidden';
}

function validacion() {
    var nameInput = document.getElementById('name').value;
    var surnameInput = document.getElementById('surname').value;
    var phoneInput = document.getElementById('phone').value;
    var addressInput = document.getElementById('address').value;
    var emailInput = document.getElementById('email').value;
    var usernameInput = document.getElementById('username').value;
    var passwordInput = document.getElementById('password').value;

    var nameSurnameValid = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s\d,.-]{2,50}$/;
    var phoneValid = /^\d{9}$/;
    var addressValid = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s\d,.-]{2,50}$/;
    var emailValid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var passwordValid = /[a-zñA-ZÑ0-9.!#$%&'*+/=?_`{|}~-]{8,50}$/;
    var usernameValid = /[a-zñA-ZÑ0-9.-_]{1,100}$/;

    var isValid = true;

    if (!nameSurnameValid.test(nameInput)) {
        document.getElementById('nameHelp').style.visibility = 'visible';
        isValid = false;
    }

    if (!nameSurnameValid.test(surnameInput)) {
        document.getElementById('surnameHelp').style.visibility = 'visible';
        isValid = false;
    }

    if (!phoneValid.test(phoneInput)) {
        document.getElementById('phoneHelp').style.visibility = 'visible';
        isValid = false;
    }
    if (!emailValid.test(emailInput)) {
        document.getElementById('emailHelp').style.visibility = 'visible';
        isValid = false;
    }
    if (!addressValid.test(addressInput)) {
        document.getElementById('addressHelp').style.visibility = 'visible';
        isValid = false;
    }
    if (!passwordValid.test(passwordInput)) {
        document.getElementById('passwordHelp').style.visibility = 'visible';
        isValid = false;
    }
    if (!usernameValid.test(usernameInput)) {
        document.getElementById('usernameHelp').style.visibility = 'visible';
        isValid = false;
    }

    return isValid;
}
