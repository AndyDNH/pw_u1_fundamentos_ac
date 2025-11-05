function cambiarColor(id_elemento, color) {
    document.getElementById(id_elemento).style.color = color;
}
function agregarElemento(id_elementoPadre, html) {
    document.getElementById(id_elementoPadre).innerHTML = html;

}

function removerElemento(id_elementoPadre) {
    document.getElementById(id_elementoPadre).remove();
}

function ocultarElemento(id_elementoPadre) {
    document.getElementById(id_elementoPadre).style.display = 'none';
}

function mostrarElemento(id_elementoPadre) {
    document.getElementById(id_elementoPadre).style.display = 'block';
}

function construirH1() {
    return '<h1 id = "id_calculadora" >Calculadora Externa</h1>';

}   

function sumar(num1,num2) {
    return num1 + num2;
}

function restar(num1,num2) {
    return num1 - num2; 
}

function multiplicar(num1,num2) {
    return num1 * num2;
}

function dividir(num1,num2) {
    return num1 / num2;
}

function evaluarOperacion(tipo) { 
    let num1 = parseFloat(document.getElementById('id_n1').value);
    let num2 = parseFloat(document.getElementById('id_n2').value);
    let resultado = 0;
    if (tipo ===  '+') {
        resultado = sumar(num1,num2);
    }if (tipo ===  '-') {
        resultado = restar(num1,num2);
    }if (tipo ===  '*') {
        resultado = multiplicar(num1,num2);
    }if (tipo ===  '/') {
        resultado = dividir(num1,num2);
    }
    document.getElementById('id_resultado').innerText = resultado;
}