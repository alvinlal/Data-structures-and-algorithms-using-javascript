async function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    var currentVal = arr[i];
    await sleep(20);
    for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
