let num1 =0;
let num2 =0;
let display = document.getElementById('display');

function mostrarDisplay(valor) {
    let elemento = document.getElementById('display');
    elemento.innerText= elemento.innerText+valor;
}

function operaciones(operador){
    switch (operador) {
        case '/':
            display.innerText = 0;
            break;
    
        default:
            break;
    }
}


function sumar(num1, num2) {
    num1 = display.innerText;
    num2 =  display.innerText;
     return num1+num2;
}
function restar(num1, num2) {
    num1 = display.innerText;
    num2 =  display.innerText;
     return num1-num2;
}
function multiplicar(num1, num2) {
    num1 = display.innerText;
    num2 =  display.innerText;
     return num1/num2;
}
function dividir(num1, num2) {
    num1 = display.innerText;
    num2 =  display.innerText;
     return num1num2;
}
function porcentaje(num1, num2) {
    num1 = display.innerText;
    num2 =  display.innerText;
     return num1+num2;
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