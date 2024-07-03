function ehImpar(numero) {
  return numero % 2 !== 0;
}

function ehPrimo(numero) {
  if (numero <= 1) {
    return false;
  }
  if (numero === 2) {
    return true;
  }
  if (numero % 2 === 0) {
    return false;
  }
  let limite = Math.sqrt(numero);
  for (let i = 3; i <= limite; i += 2) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
}

function verificaNumero(numero, funcaoVerificacao) {
  return funcaoVerificacao(numero);
}

let numero1 = 17;
console.log(`O número ${numero1} é ímpar? ${verificaNumero(numero1, ehImpar)}`);
console.log(`O número ${numero1} é primo? ${verificaNumero(numero1, ehPrimo)}`);

let numero2 = 24;
console.log(`O número ${numero2} é ímpar? ${verificaNumero(numero2, ehImpar)}`);
console.log(`O número ${numero2} é primo? ${verificaNumero(numero2, ehPrimo)}`);

let numero3 = 31;
console.log(`O número ${numero3} é ímpar? ${verificaNumero(numero3, ehImpar)}`);
console.log(`O número ${numero3} é primo? ${verificaNumero(numero3, ehPrimo)}`);
