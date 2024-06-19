var first = prompt("primeiro valor");
var second = prompt("segundo valor");

console.log(min(first, second));
console.log(max(first, second));

function min(a, b) {
  return a < b ? a : b;
}

function max(a, b) {
  return a > b ? a : b;
}
