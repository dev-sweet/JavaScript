const findNum = (arr, value) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }

  return -1;
};

const result = findNum([3, 2, 4, 5, 67, 4], 5);
console.log(result);
