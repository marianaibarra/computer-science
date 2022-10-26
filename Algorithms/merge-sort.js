/**
 * 
 * Merge sort algorithm
 * O(n log n) time complexity
 * @param {} array 
 * @returns sortedarray 
 */

function mergesort(array) {
  if (array.length < 2) return array;
  const mid = Math.floor(array.length / 2);
  const leftarr = array.slice(0, mid);
  const rightarr = array.slice(mid, array.length);

  return merge(mergesort(leftarr), mergesort(rightarr));
}

function merge(leftarr, rightarr) {
  let resultarr = [];
  let left = 0;
  let right = 0;

  while (left < leftarr.length && right < rightarr.length) {
    if (leftarr[left] < rightarr[right]) {
      resultarr.push(leftarr[left]);
      left += 1;
    } else {
      resultarr.push(rightarr[right]);
    }
  }
  return resultarr.concat(leftarr.slice(left)).concat(rightarr.slice(right));
}
