function guardar() {
    console.log('guardar');


    validarCampos();
    limpiarMensajes();
}
function validarCampos() {
    let nombre = document.getElementById("id_nombre").value;
    let apellido = document.getElementById("id_apellido").value;
    let nacimiento = document.getElementById("id_fecha").value;
    let email = document.getElementById("id_email").value;
    let password = document.getElementById("id_password").value;

    if (nombre === "") {
        mostrarMensaje("Campo nombre vacio");
        mostrarAsterisco("id_error_nombre")
        return;
    } if (apellido === "") {
        mostrarMensaje("Campo apellido vacio");
        mostrarAsterisco("id_error_apellido");
        return;
    }

    if (nacimiento === "") {
        mostrarMensaje("Campo nacimiento vacio");
        mostrarAsterisco("id_error_fecha");
        return;
    }
    if (email === "") {
        mostrarMensaje("Campo email vacio");
        mostrarAsterisco("id_error_email");
        return;
    } if (!email === "") {

        validarEmail(email)
    }

    if (password === "") {
        mostrarMensaje("Campo Password vacio");
        mostrarAsterisco("id_error_password");
        return;
    }
}

function mostrarMensaje(msg) {
    let valor = document.getElementById("id_msg_error");
    valor.innerText = msg;
    valor.style.display = "block";
}

function mostrarAsterisco(idElemento) {
    document.getElementById(idElemento).innerText = "*";
}

function limpiarMensajes() {


    setTimeout(() => {
        let valor = document.getElementById("id_msg_error");
        valor.innerText = "";
        valor.style.display = "none";

        const erroresAsterisco = document.querySelectorAll('.error_asterisco');
        erroresAsterisco.forEach(e => e.innerText = '');
    }, 3000);

}

function validarEmail(email) {
    const patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return patron.test(email);
}
