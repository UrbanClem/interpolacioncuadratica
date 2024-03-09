const fxo = document.getElementById("fxo");
const fx1 = document.getElementById("fx1");
const fx0 = document.getElementById("fx0");
const x1 = document.getElementById("x1");
const x0 = document.getElementById("x0");
const x2 = document.getElementById("x2");
const output = document.querySelector(".output");
const submit = document.querySelector("#submit");

function lnfxo() {
  return Math.log(parseFloat(fxo.value));
}

function lnfx1() {
  return Math.log(parseFloat(fx1.value));
}

function lnfx0() {
  return Math.log(parseFloat(fx0.value));
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
  const fxoVal = lnfxo();
  const fx1Val = lnfx1();
  const fx0Val = lnfx0();
  const x1Val = x1cal();
  const x0Val = x0cal();
  const xVal = x2cal();

  const numerator1 = (xVal - x0Val) * (xVal - x1Val);
  const numerator2 = (xVal - x0Val) * (xVal - xoVal);
  const numerator3 = (xVal - x1Val) * (xVal - xoVal);

  const denominator1 = (x0Val - x1Val);
  const denominator2 = (x0Val - xoVal);
  const denominator3 = (x1Val - xoVal);

  const result = (
    (fxoVal * numerator1 / denominator1) +
    (fx1Val * numerator2 / denominator2) +
    (fx0Val * numerator3 / denominator3)
  );

  output.innerHTML = Math.exp(result);
}

submit.addEventListener("click", quadraticInterpolation);
