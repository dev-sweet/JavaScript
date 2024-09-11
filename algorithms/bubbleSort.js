const bubbleSort = (arr) => {
  let swaped;
  do {
    swaped = false;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swaped = true;
      }
    }
  } while (swaped);

  return arr;
};

const result = bubbleSort([5, 4, 7, 2, 3, 9]);

console.log(result);
