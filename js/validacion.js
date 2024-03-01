/***************************************************
 *      funciones de validación del formulario de
 *      validacionForm.js
 * 
 */

function validacion() {
    let correcto = true;
    let nombre = document.getElementById('firstName').value;
    let apellidos = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let direccion = document.getElementById('address').value;
    let pass = document.getElementById('password').value;

    // Validación del nombre
    if (nombre == "" || /^\s+$/.test(nombre) || !/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{2,20}$/.test(nombre)) {
        document.getElementById('nombreHelp').style.visibility = "visible";
        document.getElementById('firstName').style.borderColor = "red";
        correcto = false;
    } else {
        document.getElementById('firstName').style.borderColor = "lightgray";
    }

    // Validación de los apellidos
    if (apellidos == "" || /^\s+$/.test(apellidos) || !/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{2,20}$/.test(apellidos)) {
        document.getElementById('apellidosHelp').style.visibility = "visible";
        document.getElementById('lastName').style.borderColor = "red";
        correcto = false;
    } else {
        document.getElementById('lastName').style.borderColor = "lightgray";
    }

    // Validación del correo electrónico
    if (email == "" || !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
        document.getElementById('emailHelp').style.visibility = "visible";
        document.getElementById('email').style.borderColor = "red";
        correcto = false;
    } else {
        document.getElementById('email').style.borderColor = "lightgray";
    }

    // Validación del número de teléfono
    if (phone == "" || !/^\d{9}$/.test(phone)) {
        document.getElementById('phoneHelp').style.visibility = "visible";
        document.getElementById('phone').style.borderColor = "red";
        correcto = false;
    } else {
        document.getElementById('phone').style.borderColor = "lightgray";
    }

    // Validación de la dirección
    if (direccion == "" || !/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s\d,.-]{2,50}$/.test(direccion)) {
        document.getElementById('addressHelp').style.visibility = "visible";
        document.getElementById('address').style.borderColor = "red";
        correcto = false;
    } else {
        document.getElementById('address').style.borderColor = "lightgray";
    }

    // Validación de la contraseña
    if (pass.length < 8 || pass.length > 15 || !/[a-zñ]/.test(pass)) {
        document.getElementById('passwordHelp').style.visibility = "visible";
        document.getElementById('password').style.borderColor = "red";
        correcto = false;
    } else {
        document.getElementById('password').style.borderColor = "lightgray";
    }

    return correcto;
}

function eliminarError(id) {
    document.getElementById(id + 'Help').style.visibility = "hidden";
    document.getElementById(id).style.borderColor = "lightgray";
}