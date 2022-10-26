let array = [1, 2, 3, 4];
let result = array[1]; // 2

// Search value, using built in functions
let isIncluded = array.indexOf(2);

// O(1)
// Add elements to the end of the array
array.push(1);

// O(n)
// Add elements at the start of the array
array.unshift(2);

// O(k) k: size of elements to append
array.push([1, 2, 4, 5, 6]);

// O(n)
// Delete element of the array
let indexOfElToDel = array.indexOf(3);
array.splice(indexOfElToDel, 1);
