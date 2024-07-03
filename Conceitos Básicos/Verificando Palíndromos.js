var str = prompt("Digite uma palavra");
var pal = "";
var aux = str.length - 1;

for (var i = aux; i >= 0; i--) {
  pal += str[i];
}

if (str == pal) {
  console.log("palindromo");
} else {
  console.log("nao");
}
