function validarCampo(input) {
    var mensajeError = document.getElementById(input.className + '-error');
    var tooltip = document.getElementById(input.className + '-tooltip');
    var checkIconGreen = document.getElementById(input.className + '-check-green');
    var checkIconRed = document.getElementById(input.className + '-check-red');

    if (!input.validity.valid) {
        mensajeError.style.display = 'block';
        tooltip.textContent = 'Campo inválido: ' + obtenerMensajeError(input);
        tooltip.style.backgroundColor = 'rgba(255, 0, 0, 0.5)'; /* Rojo con 50% de opacidad */
        checkIconGreen.style.display = 'none';
        checkIconRed.style.display = 'block';
    } else {
        mensajeError.style.display = 'none';
        tooltip.textContent = 'Campo válido';
        tooltip.style.backgroundColor = 'rgba(0, 255, 0, 0.5)'; /* Verde con 50% de opacidad */
        checkIconGreen.style.display = 'block';
        checkIconRed.style.display = 'none';
    }
}

function validarConfirmacion(input) {
    var passwordInput = document.querySelector('.password');
    var confirmacionInput = input;

    var mensajeError = document.getElementById('confirm-password-error');
    var tooltip = document.getElementById('confirm-password-tooltip');
    var checkIconGreen = document.getElementById('confirm-password-check-green');
    var checkIconRed = document.getElementById('confirm-password-check-red');

    if (passwordInput.value !== confirmacionInput.value) {
        mensajeError.style.display = 'block';
        tooltip.textContent = 'Las contraseñas no coinciden';
        tooltip.style.backgroundColor = 'rgba(255, 0, 0, 0.5)'; /* Rojo con 50% de opacidad */
        checkIconGreen.style.display = 'none';
        checkIconRed.style.display = 'block';
    } else {
        mensajeError.style.display = 'none';
        tooltip.textContent = 'Contraseña confirmada';
        tooltip.style.backgroundColor = 'rgba(0, 255, 0, 0.5)'; /* Verde con 50% de opacidad */
        checkIconGreen.style.display = 'block';
        checkIconRed.style.display = 'none';
    }
}

function obtenerMensajeError(input) {
    if (input.validity.valueMissing) {
        return 'Por favor, completa este campo.';
    } else if (input.validity.typeMismatch) {
        return 'Por favor, ingresa un formato válido.';
    } else if (input.validity.patternMismatch) {
        return 'El formato no es válido.';
    } else {
        return 'Por favor, completa este campo correctamente.';
    }
}