const fx0 = document.getElementById("fx0");
const fx1 = document.getElementById("fx1");
const fx2 = document.getElementById("fx2");
const x = document.getElementById("x");
const x1 = document.getElementById("x1");
const x0 = document.getElementById("x0");
const x2 = document.getElementById("x2");
const output = document.querySelector(".output");
const submit = document.querySelector("#submit");

function lnfx0() {
  return parseFloat(fx0.value);
}

function lnfx1() {
  return parseFloat(fx1.value);
}

function lnfx2() {
  return parseFloat(fx2.value);
}

function xcal() {
  return parseFloat(x.value);
}

function x1cal() {
  return parseFloat(x1.value);
}

function x0cal() {
  return parseFloat(x0.value);
}

function x2cal() {
  return parseFloat(x2.value);
}

function quadraticInterpolation() {
  const fx0Val = parseFloat(fx0.value);
  const fx1Val = parseFloat(fx1.value);
  const fx2Val = parseFloat(fx2.value);
  const xVal = parseFloat(x.value);
  const x1Val = parseFloat(x1.value);
  const x0Val = parseFloat(x0.value);
  const x2Val = parseFloat(x2.value);

  const B1 = ((fx1Val - fx0Val) / (x1Val - x0Val));
  const B2 = (((fx2Val - fx1Val) / (x2Val - x1Val) - B1) / (x2Val - x0Val));

  const result = fx0Val + B1 * (xVal - x0Val) + B2 * (xVal - x0Val) * (xVal - x1Val);
  
  output.querySelector("#result").innerHTML = result;
}

submit.addEventListener("click", quadraticInterpolation);
