// Big-o always shows the worst case scenario, for example in O(log n) the log of n is the worst case scenario.

function constant() {
  return 1 + 2;
  // O(1) Constant, always takes the same time
}

function linear(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  // O(n) Linear, takes longer as the size increases
}

function linear2(n) {
  for (let i = 0; i < n; i = i + 2) {
    console.log("hello");
  }
  // Will print hello in n/2, we ignore the 1/2 constant and set it to O(n).
  // ** Set the worse case between two possible functions**
}

function square(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
  // O(n^2) Square, takes the square of time (n) as the size increases
}

function cube(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        console.log(i, j, k);
      }
    }
  }
  // O(n^3) Cube, takes the cube of time (n) as the size increases
}

function logn(n) {
  while (n > 1) {
    n = Math.floor(n / 2);
  }
  // O(log n) time increases linearly as n increases exponentially.
}

function logn2(n) {
  for (let i = 1; i <= n; i = i * 2) {
    console.log("hello");
  }
}

function nlogn(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 1; j < n; j = j * 2) {
      console.log("hello");
    }
  }

  // O(n log n). Combination of O(n) & O(log n)
}

function nlogn2(n) {
  for (let i = 0; i < n; i = i + 2) {
    for (let j = 1; j < n; j = j * 3) {
      console.log("hello");
    }
  }

  // O(n log n). Combination of O(n) & O(log n) with ignore of mildhalf functions straight to worst case scenario. O(n)
}

function nlogn3(n) {
  let y = n;
  while (n > 1) {
    n = Math.floor(n / 2);
    for (let i = 0; i < y; i++) {
      console.log(i);
    }
  }
}

function nexpo(n) {
  /** fibbonacci */
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }

  return nexpo(n - 1) + nexpo(n + 2);
  // O(2^n), actually O(2^n - 1) but upper bound to worse case.
}

function nfactorial(n) {
  if (n === 0) {
    console.log("************");
    return;
  }

  for (let i = 0; i < n; i++) {
    nfactorial(n - 1);
  }

  // O(n!)
}
