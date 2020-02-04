// Operações em array

//Map
const arr = [1, 3, 4, 5, 8, 10];

const newArray = arr.map(function(item) {
  return item * 2;
});

console.log(newArray);

//Reduce
const sum = arr.reduce(function(total, next) {
  return total + next;
});
console.log(sum);

//Filter
const filter = arr.filter(function(item) {
  return item % 2 === 0;
});

console.log(filter);

//Find
const find = arr.find(function(item) {
  return item === 10;
});

console.log(find);
