let cantidadHaEvaluar1 = "";
let operador = "";

const btnSuma = document.getElementById("btn_sumar");
const btnResta = document.getElementById("btn_restar");
const btnMultiplicar = document.getElementById("btn_multiplicar");
const btnDividir = document.getElementById("btn_dividir");
const btnResultado = document.getElementById("result");
const btnNum0 = document.getElementById("num0");
const btnNum1 = document.getElementById("num1");
const btnNum2 = document.getElementById("num2");
const btnNum3 = document.getElementById("num3");
const btnNum4 = document.getElementById("num4");
const btnNum5 = document.getElementById("num5");
const btnNum6 = document.getElementById("num6");
const btnNum7 = document.getElementById("num7");
const btnNum8 = document.getElementById("num8");
const btnNum9 = document.getElementById("num9");
const btnDot = document.getElementById("dot");
const visor = document.getElementById("input");
const btnClear = document.getElementById("btn_clear");

const habilitarBotones = () => {
  btnSuma.disabled = false;
  btnResta.disabled = false;
  btnMultiplicar.disabled = false;
  btnDividir.disabled = false;
};

const inhabilitarBotones = () => {
  btnSuma.disabled = true;
  btnResta.disabled = true;
  btnMultiplicar.disabled = true;
  btnDividir.disabled = true;
  btnDot.disabled = true;
};

const limpiarCalculadora = () => {
  habilitarBotones();
  cantidadHaEvaluar1 = "";
  visor.innerHTML = "";
  operador = "";
};

btnNum0.addEventListener("click", () => {
  cantidadHaEvaluar1 = cantidadHaEvaluar1 + "0";
  visor.innerHTML = cantidadHaEvaluar1;
});

btnNum1.addEventListener("click", () => {
  cantidadHaEvaluar1 = cantidadHaEvaluar1 + "1";
  visor.innerHTML = cantidadHaEvaluar1;
});

btnNum2.addEventListener("click", () => {
  cantidadHaEvaluar1 = cantidadHaEvaluar1 + "2";
  visor.innerHTML = cantidadHaEvaluar1;
});

btnNum3.addEventListener("click", () => {
  cantidadHaEvaluar1 = cantidadHaEvaluar1 + "3";
  visor.innerHTML = cantidadHaEvaluar1;
});

btnNum4.addEventListener("click", () => {
  cantidadHaEvaluar1 = cantidadHaEvaluar1 + "4";
  visor.innerHTML = cantidadHaEvaluar1;
});

btnNum5.addEventListener("click", () => {
  cantidadHaEvaluar1 = cantidadHaEvaluar1 + "5";
  visor.innerHTML = cantidadHaEvaluar1;
});

btnNum6.addEventListener("click", () => {
  cantidadHaEvaluar1 = cantidadHaEvaluar1 + "6";
  visor.innerHTML = cantidadHaEvaluar1;
});

btnNum7.addEventListener("click", () => {
  cantidadHaEvaluar1 = cantidadHaEvaluar1 + "7";
  visor.innerHTML = cantidadHaEvaluar1;
});

btnNum8.addEventListener("click", () => {
  cantidadHaEvaluar1 = cantidadHaEvaluar1 + "8";
  visor.innerHTML = cantidadHaEvaluar1;
});

btnNum9.addEventListener("click", () => {
  cantidadHaEvaluar1 = cantidadHaEvaluar1 + "9";
  visor.innerHTML = cantidadHaEvaluar1;
});

btnDot.addEventListener("click", () => {
  cantidadHaEvaluar1 = cantidadHaEvaluar1 + ".";
  visor.innerHTML = cantidadHaEvaluar1;
  btnDot.disabled = true;
});

btnSuma.addEventListener("click", () => {
  cantidadHaEvaluar1 = cantidadHaEvaluar1 + "+";
  operador = "+";
  visor.innerHTML = cantidadHaEvaluar1;
  inhabilitarBotones();
  btnDot.disabled = false;
});

btnResta.addEventListener("click", () => {
  operador = "-";
  cantidadHaEvaluar1 = cantidadHaEvaluar1 + "-";
  visor.innerHTML = cantidadHaEvaluar1;
  inhabilitarBotones();
});

btnMultiplicar.addEventListener("click", () => {
  operador = "*";
  cantidadHaEvaluar1 = cantidadHaEvaluar1 + "*";
  visor.innerHTML = cantidadHaEvaluar1;
  inhabilitarBotones();
});

btnDividir.addEventListener("click", () => {
  operador = "/";
  cantidadHaEvaluar1 = cantidadHaEvaluar1 + "/";
  visor.innerHTML = cantidadHaEvaluar1;
  inhabilitarBotones();
});

btnResultado.addEventListener("click", () => {
  let resultado = 0;
  let cantidades = [];
  switch (operador) {
    case "+":
      cantidades = cantidadHaEvaluar1.split(operador);
      resultado = parseFloat(cantidades[0]) + parseFloat(cantidades[1]);
      visor.innerHTML = resultado;
      break;
    case "-":
      cantidades = cantidadHaEvaluar1.split(operador);
      resultado = parseFloat(cantidades[0]) - parseFloat(cantidades[1]);
      visor.innerHTML = resultado;
      break;
    case "*":
      cantidades = cantidadHaEvaluar1.split(operador);
      resultado = parseFloat(cantidades[0]) * parseFloat(cantidades[1]);
      visor.innerHTML = resultado;
      break;
    case "/":
      cantidades = cantidadHaEvaluar1.split(operador);
      resultado = parseFloat(cantidades[0]) / parseFloat(cantidades[1]);
      visor.innerHTML = resultado;
      break;
    default:
      alert("Debe selecionar un operador para realizar su calculo");
      break;
  }
  habilitarBotones();
  cantidadHaEvaluar1 = visor.innerHTML;
});

btnClear.addEventListener("click", () => {
  limpiarCalculadora();
});
