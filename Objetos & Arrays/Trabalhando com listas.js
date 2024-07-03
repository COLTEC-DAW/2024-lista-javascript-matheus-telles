function toList(array) {
  if (array.length === 0) {
    return null;
  }

  let list = {
    value: array[0],
    rest: null,
  };

  let lastElement = list;

  for (let i = 1; i < array.length; i++) {
    let nextElement = {
      value: array[i],
      rest: null,
    };

    lastElement.rest = nextElement;

    lastElement = nextElement;
  }

  return list;
}

let array = [1, 2, 3];
let list = toList(array);
console.log(list);
