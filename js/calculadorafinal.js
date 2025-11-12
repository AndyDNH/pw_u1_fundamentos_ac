let display = null;
let num1 = null;
let num2 = null;
let operador = null;
let resultadoMostrado = false;

//sin esto no funciona tener el display como variable global :/
function iniciarDisplay() {
  display = document.getElementById('display');
}

iniciarDisplay()

function mostrarDisplay(valor) {
  if (!display) return;
  if (resultadoMostrado) {
    display.innerText = '';
    resultadoMostrado = false;
  }
  if (valor === '.' && display.innerText.includes('.')) return;

  display.innerText = display.innerText + valor;
}


function seleccionarOperacion(op) {
  if (!display) return;
  if (display.innerText === '' && resultadoMostrado) {
    num1 = parseFloat(display.innerText || '0');
  } else if (display.innerText === '') {
    return;
  } else {
    num1 = parseFloat(display.innerText);
  }

  operador = op;
  display.innerText = '';
  resultadoMostrado = false;
}

function calcularResultado() {
  if (!display || operador === null) return;

  if (operador === '%') {
    if (display.innerText === '') return;
    num2 = parseFloat(display.innerText);
    const resultadoPorcentaje = (num1 * num2) / 100;
    display.innerText = String(resultadoPorcentaje);
    resultadoMostrado = true;
    operador = null;
    return;
  }

  if (display.innerText === '') return;
  num2 = parseFloat(display.innerText);
  let resultado = 0;

  switch (operador) {
    case '+':
      resultado = num1 + num2;
      break;
    case '-':
      resultado = num1 - num2;
      break;
    case '*':
      resultado = num1 * num2;
      break;
    case '/':
      resultado = num2 === 0 ? 'Error' : num1 / num2;
      break;
    default:
      return;
  }

  display.innerText = String(resultado);
  resultadoMostrado = true;
  operador = null;
  num1 = resultado;
  num2 = null;
}

function borrarTodo() {
  if (!display) return;
  display.innerText = '';
  num1 = null;
  num2 = null;
  operador = null;
  resultadoMostrado = false;
}

function borrarUltimo() {
  if (!display) return;
  if (resultadoMostrado) {
    display.innerText = '';
    resultadoMostrado = false;
    return;
  }
  display.innerText = display.innerText.slice(0, -1);
}
