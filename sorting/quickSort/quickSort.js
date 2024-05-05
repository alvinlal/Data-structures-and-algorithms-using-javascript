function pivot(arr, lo, hi) {
  var pivot = arr[hi];
  var swapIdx = lo - 1;

  for (let i = lo; i < hi; i++) {
    if (arr[i] < pivot) {
      swapIdx++;
      var temp = arr[i];
      arr[i] = arr[swapIdx];
      arr[swapIdx] = temp;
    }
  }

  swapIdx++;
  var temp = arr[hi];
  arr[hi] = arr[swapIdx];
  arr[swapIdx] = temp;

  return swapIdx;
}

function quickSort(arr, lo, hi) {
  if (lo >= hi) return;

  const pivotIdx = pivot(arr, lo, hi);
  quickSort(arr, lo, pivotIdx - 1);
  quickSort(arr, pivotIdx + 1, hi);
}

const arr = [56, 23, 12, 67, 423, 5, 3, 22, 1];

quickSort(arr, 0, arr.length - 1);

console.log(arr);
