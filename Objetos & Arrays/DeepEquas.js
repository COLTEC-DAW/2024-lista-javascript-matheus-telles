function deepEquals(obj1, obj2) {
  if (
    typeof obj1 !== "object" ||
    typeof obj2 !== "object" ||
    obj1 === null ||
    obj2 === null
  ) {
    return false;
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (!keys2.includes(key)) {
      return false;
    }

    if (!deepEquals(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true;
}

let obj1 = { a: 1, b: { c: 2 } };
let obj2 = { a: 1, b: { c: 2 } };
console.log(deepEquals(obj1, obj2));

let obj3 = { a: 1, b: { c: 2 } };
let obj4 = { a: 1, b: { c: 3 } };
console.log(deepEquals(obj3, obj4));

let obj5 = { a: 1, b: { c: 2 } };
let obj6 = { a: 1, b: { d: 2 } };
console.log(deepEquals(obj5, obj6));
