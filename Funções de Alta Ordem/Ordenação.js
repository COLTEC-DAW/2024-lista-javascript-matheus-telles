// Função de ordenação utilizando Bubble Sort com critério dinâmico
function bubbleSort(array, compareFunction) {
  const n = array.length;
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      // Utiliza a função de comparação para determinar a ordem dos elementos
      if (compareFunction(array[i], array[i + 1])) {
        // Troca os elementos de posição
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        swapped = true;
      }
    }
  } while (swapped);

  return array;
}

// Exemplos de funções de comparação para diferentes critérios

// Critério de ordenação crescente
function compareAscending(a, b) {
  return a > b;
}

// Critério de ordenação decrescente
function compareDescending(a, b) {
  return a < b;
}

// Critério de ordenação crescente para números ímpares
function compareAscendingOddNumbers(a, b) {
  if (a % 2 !== 0 && b % 2 !== 0) {
    return a > b;
  } else if (a % 2 !== 0) {
    return true;
  } else if (b % 2 !== 0) {
    return false;
  } else {
    return a > b; // Ordena números pares mantendo a ordem original
  }
}

// Critério de ordenação decrescente para números pares
function compareDescendingEvenNumbers(a, b) {
  if (a % 2 === 0 && b % 2 === 0) {
    return a < b;
  } else if (a % 2 === 0) {
    return true;
  } else if (b % 2 === 0) {
    return false;
  } else {
    return a < b; // Ordena números ímpares mantendo a ordem original
  }
}

// Exemplo de uso

let numbers = [5, 2, 9, 1, 5, 6, 3, 8];

console.log("Array original:", numbers);

// Ordenação crescente
bubbleSort(numbers.slice(), compareAscending);
console.log("Ordenado em ordem crescente:", numbers);

// Ordenação decrescente
bubbleSort(numbers.slice(), compareDescending);
console.log("Ordenado em ordem decrescente:", numbers);

// Ordenação crescente para números ímpares
bubbleSort(numbers.slice(), compareAscendingOddNumbers);
console.log("Ordenado em ordem crescente para ímpares:", numbers);
