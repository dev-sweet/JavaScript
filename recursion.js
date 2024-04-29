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
// function someOfNumber(n) {
//   if (n <= 0) {
//     console.log("return 0");
//     return 0;
//   }

//   return n + someOfNumber(n - 1);
// }
// console.log(someOfNumber(10));

// some of array using recursion

function sumOfArray(arr) {
  if (arr.length === 0) {
    return 0;
  }

  const slicedArray = arr.slice(1);
  return arr[0] + sumOfArray(slicedArray);
}

const array = [45, 34, 2];

console.log(sumOfArray(array));
