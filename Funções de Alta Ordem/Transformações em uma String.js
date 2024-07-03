function transformaString(texto, funcaoTransformacao) {
  let resultado = "";

  for (let i = 0; i < texto.length; i++) {
    let char = texto[i];
    char = char.toLowerCase();
    resultado += funcaoTransformacao(char);
  }

  return resultado;
}

function caixaAltaVogais(char) {
  const vogais = "aeiou";
  if (vogais.includes(char)) {
    return char.toUpperCase();
  } else {
    return char;
  }
}

function caixaAltaConsoantes(char) {
  const vogais = "aeiou";
  if (!vogais.includes(char) && char.match(/[a-zA-Z]/)) {
    return char.toUpperCase();
  } else {
    return char;
  }
}

function caixaBaixaVogais(char) {
  const vogais = "aeiou";
  if (vogais.includes(char)) {
    return char.toLowerCase();
  } else {
    return char;
  }
}

function caixaBaixaConsoantes(char) {
  const vogais = "aeiou";
  if (!vogais.includes(char) && char.match(/[a-zA-Z]/)) {
    return char.toLowerCase();
  } else {
    return char;
  }
}

let textoOriginal = "Hello, World!";
console.log(`Texto original: ${textoOriginal}`);
console.log(
  `Caixa alta nas vogais: ${transformaString(textoOriginal, caixaAltaVogais)}`
);
console.log(
  `Caixa alta nas consoantes: ${transformaString(
    textoOriginal,
    caixaAltaConsoantes
  )}`
);
console.log(
  `Caixa baixa nas vogais: ${transformaString(textoOriginal, caixaBaixaVogais)}`
);
console.log(
  `Caixa baixa nas consoantes: ${transformaString(
    textoOriginal,
    caixaBaixaConsoantes
  )}`
);
