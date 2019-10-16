//Create some arrays
const numbers = [43, 56, 33, 13, 45, 56, 5]
const numbers3 = new Array(22, 33, 55, 94, 75);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'hello', true, undefined, null, { a: 1, b: 1 }, new Date()];

let val;

// Get array length 
val = numbers.length;
// Check if is array
val = Array.isArray(numbers);
// Get single value
val = numbers[3];
// Insert into array
numbers[2] = 100;
// Find index of value 
val = numbers.indexOf(33);

//MUTATING ARRAYS
numbers.push(250)
// Add on to front 
numbers.unshift(120);
//Take off from end 
numbers.pop();
// Take off from front 
numbers.shift();
// Splice values - define from starting point 
numbers.splice(1, 3);
// Reverse the array 
numbers.reverse();


//CONCATENATE arrays 
val = numbers.concat(numbers3);

// Sorting arrays to get arranged in alphabetical order 
// val = fruit.sort();
// val = numbers.sort();

// Use the compare function
// val = numbers.sort(function (x, y) {
//     return x - y;
// })

// Reverse sort
// val = numbers.sort(function (x, y) {
//     return y - x;
// })

// Find 
function under50(num) {
    return num < 50;
}

val = numbers.find(under50);




console.log(numbers);
console.log(val);
