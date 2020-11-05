async function bubbleSort(arr) {
  for (var i = arr.length; i > 0; i--) {
    var noSwaps = true;
    await sleep(20);
    for (var j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        await swap(arr, j, j + 1);
        noSwaps = false;
      }
    }

    if (noSwaps) break;
  }
}

async function swap(arr, index1, index2) {
  // await sleep(0);
  var temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
