function countChars(frase, c) {
  var aux = 0;
  for (var i = 0; i < frase.length; i++) {
    if (c === frase[i]) {
      aux++;
    }
  }
  return aux;
}

console.log(countChars("AAA", "A"));
