// with simple while loop

// const isPowOfTwo = (num) => {
//   if (num < 1) {
//     return false;
//   }
//   while (num > 1) {
//     if (num % 2 !== 0) {
//       return false;
//     }

//     num = num / 2;
//   }
//   return true;
// };

// with recursive way
const isPowOfTwo = (num) => {
  if (num < 1) {
    return false;
  }

  if (num === 1) {
    return true;
  }
  if (num % 2 === 0) {
    return true;
  }
  if (num % 2 !== 0) {
    return false;
  }

  isPowOfTwo(num / 2);
};
console.log(isPowOfTwo(1));
