const findNum = (arr, num) => {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (start <= end) {
    if (arr[middle] === num) {
      return middle;
    }
    if (arr[middle] < num) {
      start = middle + 1;
    }
    if (arr[middle] > num) {
      end = middle - 1;
    }
  }
  return -1;
};

const result = findNum([3, 2, 4, 5, 6, 4], 6);
console.log(result);
