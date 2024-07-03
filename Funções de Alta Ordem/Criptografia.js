function cifraDeCesar(texto, deslocamento) {
  let textoCifrado = "";
  const tamanhoAlfabeto = 26;

  for (let i = 0; i < texto.length; i++) {
    let char = texto[i];
    let codigoAscii = texto.charCodeAt(i);

    if (
      (codigoAscii >= 65 && codigoAscii <= 90) ||
      (codigoAscii >= 97 && codigoAscii <= 122)
    ) {
      let inicioAlfabeto = codigoAscii >= 65 && codigoAscii <= 90 ? 65 : 97;
      let novoCodigoAscii =
        ((codigoAscii - inicioAlfabeto + deslocamento) % tamanhoAlfabeto) +
        inicioAlfabeto;
      textoCifrado += String.fromCharCode(novoCodigoAscii);
    } else {
      textoCifrado += char;
    }
  }

  return textoCifrado;
}

let textoOriginal = "Hello, World!";
let deslocamento = 3;
let textoCifrado = cifraDeCesar(textoOriginal, deslocamento);

console.log(`Texto original: ${textoOriginal}`);
console.log(`Texto cifrado: ${textoCifrado}`);
