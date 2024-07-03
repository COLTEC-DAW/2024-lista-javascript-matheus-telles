let Arrayoriginal = [1, 2, 3, 4, 5];
console.log(reverseArray(Arrayoriginal));

function reverseArray(array) {
  let reversedArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reversedArray.push(array[i]);
  }
  return reversedArray;
}
