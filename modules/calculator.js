export function evaluateExpression(expr) {
  try {
    return Function('"use strict";return (' + expr + ')')();
  } catch {
    return "Ekspresi tidak valid";
  }
}
