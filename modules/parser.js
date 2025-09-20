export function parseMathInput(input) {
  let parsed = input;

  // Ganti π dengan Math.PI
  parsed = parsed.replace(/π/g, "Math.PI");

  // Ganti √(x) dengan Math.sqrt(x)
  parsed = parsed.replace(/√\(([^)]+)\)/g, (_, val) => `Math.sqrt(${val})`);

  // Ganti x^y dengan Math.pow(x, y)
  parsed = parsed.replace(/(\d+|\w+)\^(\d+)/g, (_, base, exp) => `Math.pow(${base}, ${exp})`);

  // Ganti sin(x), cos(x), tan(x) dengan Math.sin(x), dst
  parsed = parsed.replace(/(sin|cos|tan)\(([^)]+)\)/g, (_, fn, val) => `Math.${fn}(${val})`);

  // Ganti log(x) dengan Math.log(x)
  parsed = parsed.replace(/log\(([^)]+)\)/g, (_, val) => `Math.log(${val})`);

  // Ganti sin30° → Math.sin(30 * Math.PI / 180)
  parsed = parsed.replace(/(sin|cos|tan)\s*(\d+)°/g, (_, fn, deg) => `Math.${fn}(${deg} * Math.PI / 180)`);

  // Ganti simbol × dan ÷ dengan * dan /
  parsed = parsed.replace(/×/g, "*").replace(/÷/g, "/");

  return parsed;
}
