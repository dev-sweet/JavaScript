// create a function which count the total of number

// by using for method

// const someOfNumber = (n) => {
//   let sum = 0;
//   for (let i = n; i >= 1; i--) {
//     sum += i;
//   }
//   return sum;
// };

// console.log(someOfNumber(15));

// Some of number by recursive way
function someOfNumber(n) {
  if (n <= 0) {
    console.log("return 0");
    return 0;
  }

  return n + someOfNumber(n - 1);
}
console.log(someOfNumber(10));
