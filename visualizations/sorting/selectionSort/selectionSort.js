async function selectionSort(arr) {
  for (var i = arr.length; i > 0; i--) {
    var lowest = i;

    await sleep(5);
    for (var j = 0; j < i; j++) {
      if (arr[j] > arr[lowest]) {
        lowest = j;
      }
    }
    if (lowest !== i) {
      await swap(arr, i, lowest);
    }
  }
}

async function swap(arr, index1, index2) {
  //   await sleep(50);
  var temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
