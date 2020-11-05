async function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    var pivotIndex = await pivot(arr, left, right);
    await sleep(20);
    await Promise.all([
      quickSort(arr, left, pivotIndex - 1),

      quickSort(arr, pivotIndex + 1, right),
    ]);
  }

  return arr;
}

async function pivot(arr, start = 0, end = arr.length - 1) {
  var pivot = arr[start];
  var swapIndex = start;

  for (let i = start; i <= end; i++) {
    if (pivot > arr[i]) {
      await sleep(5);
      swapIndex++;

      await swap(arr, swapIndex, i);
    }
  }

  await swap(arr, start, swapIndex);

  return swapIndex;
}

async function swap(arr, index1, index2) {
  // await sleep(50);
  var temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
