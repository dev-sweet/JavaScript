const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i < num; i++) {
    if (num % 2 === 0) {
      return false;
    }
  }
  return true;
};

console.log(isPrime(1));
console.log(isPrime(5));
console.log(isPrime(4));
