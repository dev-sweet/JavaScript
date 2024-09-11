const factorial = (num) => {
  let factor = 1;
  if (num === 0) {
    return 1;
  } else if (num === 1) {
    return 1;
  }
  for (let i = 2; i <= num; i++) {
    factor = factor * i;
  }
  return factor;
};

console.log(factorial(5));
// 1x2x3x4x5
