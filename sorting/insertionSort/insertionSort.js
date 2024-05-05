function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    var currentValue = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentValue;
  }
  return arr;
}

console.log(insertionSort([56, 23, 12, 67, 423, 5, 3, 22, 1]));
