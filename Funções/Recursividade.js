function mod2(number) {
  if (number % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
function mod(num, mod) {
  if (num % mod == 0) {
    return true;
  } else {
    return false;
  }
}
console.log(mod2(2));
console.log(mod2(3));
console.log(mod(4, 2));
console.log(mod(16, 5));
