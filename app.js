
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const even = nums.filter((num) => {
    return num % 2 === 0;
});

console.log(even);

function greet(name){
  return console.log(`Hello, ${name}`);
}

greet(123)