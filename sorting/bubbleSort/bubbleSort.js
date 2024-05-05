function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    var hasSwapped = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        hasSwapped = true;
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    if (!hasSwapped) break;
  }
  return arr;
}

console.log(bubbleSort([56, 23, 12, 67, 423, 5, 3, 22, 1]));
