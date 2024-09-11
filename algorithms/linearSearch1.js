const linearSearch = (arr, n) => {
  for (let i = 0; i < n; i++) {
    if (arr[i] === n) {
      return i;
    }
  }
  return -1;
};

console.log(linearSearch([0, 2, 4, 6, 23, 5, 9], 23));
