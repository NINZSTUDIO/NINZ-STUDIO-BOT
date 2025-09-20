import { evaluateExpression } from './modules/calculator.js';
import { formulas } from './modules/formulas.js';
import { parseMathInput } from './modules/parser.js';

window.calculate = function () {
  const expr = document.getElementById("expression").value;
  const parsed = parseMathInput(expr);
  const result = evaluateExpression(parsed);
  document.getElementById("result").innerText = `Hasil: ${result}`;
};

window.showFormula = function () {
  const topic = document.getElementById("topic").value;
  const container = document.getElementById("formula-display");
  container.innerHTML = "";
  if (formulas[topic]) {
    formulas[topic].forEach(f => {
      container.innerHTML += `<p><strong>${f.name}:</strong> ${f.formula}</p>`;
    });
  }
};

window.addEventListener("load", () => {
  const loader = document.getElementById("loading-screen");
  const main = document.querySelector("main");
  setTimeout(() => {
    loader.style.display = "none";
    main.style.display = "block";
  }, 2000);
});
