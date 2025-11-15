function confirmar() {
    validarCampos();
    limpiarMensajes();
}

function validarCampos() {
    let titular = document.getElementById("id_titular").value;
    let tarjeta = document.getElementById("id_tarjeta").value;
    let fecha = document.getElementById("id_fecha").value;
    let cvv = document.getElementById("id_cvv").value;
    

    if (titular === "") {
        mostrarMensaje("Campo titular vacio");
        mostrarAsterisco("id_error_titular")
        return;
    } if (tarjeta === "") {
        mostrarMensaje("Campo tarjeta vacio");
        mostrarAsterisco("id_error_tarjeta");
        return;
    }

    if (fecha === "") {
        mostrarMensaje("Campo fecha vacio");
        mostrarAsterisco("id_error_fecha");
        return;
    }
    if (cvv === "") {
        mostrarMensaje("Campo cvv vacio");
        mostrarAsterisco("id_error_cvv");
        return;
    } if (!cvv === "") {

        validarEmail(cvv)
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