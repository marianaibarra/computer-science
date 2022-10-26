/**
 * Exercises big o, time complexity
 * * */

// 1)
function product(a, b) {
  let sum = 0;
  for (let i = 0; i < b; i++) {
    sum += a;
  }
  return sum;
}
// Its O(n), increases linearly as the input size increases

// 2)
function power(a, b) {
  if (b < 0) return a;
  if (b === 0) return 1;
  let sum = a;
  for (let i = 0; i < b - 1; i++) {
    sum *= a;
  }
  return sum;
  // Two base cases, but still makes its way trought the size of b, so its O(n - 1), upper bounding, O(n)
}

// 3)
function mod(a, b) {
  if (b <= a) return -1;
  let div = a / b;
  return a - div * b;
}
// No cicles, always takes the same time, even for the base case would take constant time, O(1)

// 4)
function div(a, b) {
  let count = a;
  let sum = b;
  while (sum <= a) {
    sum += b;
    count++;
  }
  return count;
}
// Another for form, goes throught all the size of a, so O(n). Actually O(A / B), but upper bound.

// 5)
function sqrt(n) {
  return sqrt_helper(n, 1, n);
}

function sqrt_helper(n, min, max) {
  if (max < min) return -1;
  let guess = (min + max) / 2;
  if (guess * guess === n) return guess;
  else if (guess * guess < n) return sqrt_helper(n, guess + 1, max);
  else return sqrt_helper(n, min, guess - 1);
}
// O(log n)

// 6)
function sqrt2(n) {
  for (let guess = 1; guess * guess < n; guess++) {
    if (guess * guess === n) return guess;
  }
  return -1;
}
// O(sqrt(n))

// 7)
function copyArray(array) {
  let copy = [];
  array.forEach((element) => {
    copy.push(copy, element);
  });
  return copy;
}
// O(n^2)

function appendToNew(array, value) {
  let bigger = [];
  for (let i = 0; i < array.length; i++) {
    bigger[i] = array[i];
  }
  bigger[bigger.length - 1] = value;
  return bigger;
}
// O(log n)

// 8)
function findFirstIndexOfNumber(number, array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === number) {
      return i;
    }
  }
  return -1;
}
// O(n)

// 9)
function findEachIndexOfNumber(number, array) {
  let arrayOfIndexes = [];
  array.forEach(function (element, index) {
    if (element === number) {
      arrayOfIndexes.push(index);
    }
  });
  return arrayOfIndexes;
}
// O(n)

// 10)
function higherOrLower(array) {
  if (array[array.length - 1] > array[0]) return "Higher";
  else if (array[array.length - 1] < array[0]) return "Lower";
  else return "Neither";
}
// O(1)

// 11)
function determineSumOfSequentialArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}
// O(n)

// 12)
function determineSumOfSequentialArray(array) {
  return (array.length * (array.length + 1)) / 2;
}
// O(1)

// 13)

function searchSortedArray(
  number,
  array,
  beginIndex = 0,
  endIndex = array.length - 1
) {
  let middleIndex = Math.floor((beginIndex + endIndex) / 2);
  if (array[middleIndex] === number) {
    return middleIndex;
  } else if (beginIndex >= endIndex) {
    return -1;
  } else if (array[middleIndex] < number) {
    beginIndex = middleIndex + 1;
    return recursiveBinarySearch(number, array, beginIndex, endIndex);
  } else if (array[middleIndex] > number) {
    endIndex = middleIndex - 1;
    return recursiveBinarySearch(number, array, beginIndex, endIndex);
  }
}
//  O(log n)

// 14)

function compareArrays(array1, array2) {
  let arrayOfPairs = [];
  array1.forEach(function (e, i) {
    array2.forEach(function (e2, i2) {
      if (e === e2) {
        arrayOfPairs.push([i, i2]);
      }
    });
  });
  return arrayOfPairs;
}
// O(n^2)

// 15)
function sortByValue(array) {
  function swap(array, index1, index2) {
    let temporaryValue = array[index1];
    array[index1] = array[index2];
    array[index2] = temporaryValue;
  }
  let count = 1;
  while (count < array.length) {
    let swapCount = 0;
    for (let i = 0; i < array.length - count; i++) {
      if (array[i] > array[i + 1]) {
        swap(array, i, i + 1);
        swapCount++;
      }
    }
    count++;
  }
  return array;
}
// O(n^2)

// 16)
function returnDupes(array, array2) {
  let dupeArray = [];
  array.forEach(function (element) {
    if (array2.includes(element)) {
      dupeArray.push(element);
    }
  });
  return dupeArray;
}
// O(A*B)

// 17)
function sumFilteredData(array) {
  return array
    .filter(function (element) {
      return element > 5 && element < 20;
    })
    .reduce(function (valueToAdd, currentValue) {
      return valueToAdd + currentValue;
    }, 0);
}
// O(n^2)
