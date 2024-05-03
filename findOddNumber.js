const findOddNums = (arr) => {
  const oddNums = [];
  // using for loom
  // for (let i = 0; i < arr.length; i++) {
  //   const currentValue = arr[i];
  //   if (currentValue % 2 !== 0) {
  //     oddNums.push(arr[i]);
  //   }
  // }

  //   using for of method
  //   for (num of arr) {
  //     if (num % 2 !== 0) {
  //       oddNums.push(num);
  //     }
  //   }

  //   using filter
  //   const oddNums = arr.filter((num) => num % 2 !== 0);

  //   using recursion function

  function helper(arr) {
    if (arr.length === 0) {
      return 0;
    }
    if (arr[0] % 2 !== 0) {
      oddNums.push(arr[0]);
    }
    const slicedArr = arr.slice(1);
    helper(slicedArr);
  }
  helper(arr);
};

const result = findOddNums([1, 2, 3, 4, 4, 5, 6, 7, 8, 9]);
console.log(result);
