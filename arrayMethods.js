const products = [
  { name: "Laptop", price: 34500, brand: "asus" },
  { name: "phone", price: 7500, brand: "techno" },
  { name: "watch", price: 200, brand: "casio" },
  { name: "bike", price: 73500, brand: "honda" },
  { name: "car", price: 300000, brand: "toyota" },
];

const brands = products.map((product) => product.brand);
console.log(brands);

products.forEach((product) => console.log(product.price));
