const binarySearch = (arr, num) => {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    const middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (arr[middleIndex] === num) {
      return middleIndex;
    } else if (arr[middleIndex] < num) {
      leftIndex = middleIndex + 1;
    } else if (arr[leftIndex] > num) {
      rightIndex = middleIndex - 1;
    }
  }
  return -1;
};

const result = binarySearch([2, 3, 4, 5, 6], 3);

console.log(result);
