/** Binary search
 *
 * @param {} orderedarray
 * @param {} target
 * @param {} start
 * @param {} end
 * @returns boolean
 */
/*
 **/
function binarysearch(orderedarray, target, start, end) {
  if (start > end) return false;
  let mid = Math.floor((start + end) / 2);
  if (orderedarray[mid] == target) return true;

  if (orderedarray[mid] > target)
    return binarysearch(orderedarray, target, start, mid - 1);
  else return binarysearch(orderedarray, target, mid + 1, end);
}

/***
 * Test values */

// O(log 6)
let array1 = [0, 2, 3, 6, 8, 19];
let target1 = 2;

// O(log 14)
let array2 = [0, 1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 19];
let target2 = 12;

// O(log 20)
let array3 = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
];
let target3 = 5;

let array4 = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
];
let target4 = 20;

/*
 */

console.log(binarysearch(array4, target4, 0, array4.length));
