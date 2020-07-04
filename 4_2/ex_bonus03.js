let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArray = [];

for (let i = 0; i < numbers.length; i += 1) {
    if (i < numbers.length -1) {
        multiply = numbers[i] * numbers[i + 1];
        newArray.push(multiply);
    } else {
        multiply = numbers[i] * 2;
        newArray.push(multiply)
    }
}

console.log(numbers)
console.log(newArray)