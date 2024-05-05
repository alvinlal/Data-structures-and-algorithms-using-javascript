function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    var lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (lowest != i) {
      var temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }

  return arr;
}

console.log(selectionSort([56, 23, 12, 67, 423, 5, 3, 22, 1]));
