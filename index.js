// Type "node ." in terminal to run this script.

// Challenege: If a 1 is not surrounded by another 1, change it to 0.
const arr = [
  [1, 0, 0, 0],
  [0, 1, 0, 0],
  [1, 0, 1, 1],
  [0, 1, 0, 1],
];

const expected = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 1, 1],
  [0, 0, 0, 1],
];

// Lesson learned: Use these long for loops instead of (for row in arr) because that will return the entire array, which isn't what you want when calling getLeft() and the other functions.
(function solve() {
  for (let row = 0; row < arr.length; row++) {
    for (let column = 0; column < arr[row].length; column++) {
      const left = getLeft(arr, row, column);
      const right = getRight(arr, row, column);
      const top = getTop(arr, row, column);
      const bottom = getBottom(arr, row, column);

      if (isSurroundedByZeros(left, right, top, bottom)) {
        arr[row][column] = 0;
      }
    }
  }
  console.log(expected);
  console.log(arr);
})();

// Checks for 0, or -1 which represents it is at edge.
function isSurroundedByZeros(left, right, top, bottom) {
  return (left === 0 || left === -1)
      && (right === 0 || right === -1)
      && (top === 0 || top === -1)
      && (bottom === 0 || bottom === -1);
}

// Lesson learned: Don't write row + 1 or column - 1 etc twice in a function. Put it into its own variable because it's easy to write the wrong calculation.
function getLeft(arr, row, column) {
  const c = column - 1;
  if (c > 0) {
    return arr[row][c];
  }
  return -1;
}

function getRight(arr, row, column) {
  const c = column + 1;
  if (c < arr[row].length) {
    return arr[row][c];
  }
  return -1;
}

function getTop(arr, row, column) {
  const r = row - 1;
  if (r > 0) {
    return arr[r][column];
  }
  return -1;
}

function getBottom(arr, row, column) {
  const r = row + 1;
  if (r < arr.length) {
    return arr[r][column];
  }
  return -1;
}