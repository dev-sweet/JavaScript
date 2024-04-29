const charcount = (text) => {
  const count = {};
  for (let i = 0; i <= text.length; i++) {
    const char = text[i];
    if (count[char] > 0) {
      count[char]++;
    } else {
      count[char] = 1;
    }
  }
  return count;
};

console.log(charcount("Hello World"));
