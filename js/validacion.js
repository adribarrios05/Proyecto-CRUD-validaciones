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
    var usernameInput = document.getElementById('username').value;
    var passwordInput = document.getElementById('password').value;

    var nameSurnameRegex = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s\d,.-]{2,50}$/;
    var phoneRegex = /^\d{9}$/;
    var addressRegex = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s\d,.-]{2,50}$/;
    var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var passwordRegex = /[a-zñ]/;


    var isValid = true;

    if (!nameSurnameRegex.test(nameInput)) {
        document.getElementById('nameHelp').style.visibility = 'visible';
        isValid = false;
    }

    if (!nameSurnameRegex.test(surnameInput)) {
        document.getElementById('surnameHelp').style.visibility = 'visible';
        isValid = false;
    }

    if (!phoneRegex.test(phoneInput)) {
        document.getElementById('phoneHelp').style.visibility = 'visible';
        isValid = false;
    }
    if (!emailRegex.test(emailInput)) {
        document.getElementById('emailHelp').style.visibility = 'visible';
        isValid = false;
    }
    if (!emailRegex.test(emailInput)) {
        document.getElementById('emailHelp').style.visibility = 'visible';
        isValid = false;
    }


    // Aquí puedes agregar más validaciones según tus necesidades, como para el campo de correo electrónico

    return isValid;
}
