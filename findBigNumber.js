const findBigNumberInArray = (arr) => {
  let higher = arr[0];
  let lower = arr[0];
  for (let i = 0; i <= arr.length; i++) {
    if (typeof arr[i] !== "number") {
      continue;
    }

    if (higher < arr[i]) {
      higher = arr[i];
    }

    if (lower > arr[i]) {
      lower = arr[i];
    }
  }
  console.log(lower, higher);
  return higher - lower;
};

const numbers = [32, 5, 53, "sweet", 82, 28, -5];

console.log(findBigNumberInArray(numbers));
