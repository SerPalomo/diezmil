var form = document.getElementById("formulario");
form.addEventListener('submit', function (event) {
    event.preventDefault();
    event.stopPropagation();
    var mensajesError = [];
    var nombre = document.getElementById('nombre')
    var apellido = document.getElementById('apellido')
    var edad = document.getElementById('edad');
    var usuario = document.getElementById('nombre_usuario');
    var email = document.getElementById('email')
    var masculino = document.getElementById('Masculino');
    var femenino = document.getElementById('Femenino');


    if (nombre.value === '' || nombre.value.length < 2) {
        mensajesError.push('Completa tu nombre');
    }

    if (apellido.value === '' || apellido.value.length < 2) {
        mensajesError.push('Completa tu apellido');
    }

    if (usuario.value === '' || usuario.value.length < 4) {
        mensajesError.push('Completa tu nombre de usuario');
    }

    if (parseInt(edad.value) < 18) {
        mensajesError.push('Debes ser mayor de edad para participar')
    }

    if (email.value === '') {
        mensajesError.push('Completa tu E-mail');
    }

    if (!masculino.checked && !femenino.checked) {
        mensajesError.push('Seleccion sexo');
    }


    var errorListado = '<ul>'
    for (i in mensajesError){
    errorListado += '<li>' + mensajesError[i] + '</li>';
    };
    errorListado += '<ul>'

    error.outerHTML = errorListado
});