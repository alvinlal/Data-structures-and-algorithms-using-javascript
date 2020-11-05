function shellSort(arr) {
  for (
    let gap = Math.floor(arr.length / 2);
    gap >= 1;
    gap = Math.floor(gap / 2)
  ) {
    for (let j = gap; j < arr.length; j++) {
      for (let i = j - gap; i >= 0; i -= gap) {
        if (arr[i + gap] > arr[i]) {
          break;
        } else {
          var temp = arr[i];
          arr[i] = arr[i + gap];
          arr[i + gap] = temp;
        }
      }
    }
  }
  return arr;
}

console.log(shellSort([9, 3, 8, 27, 47, 273, 73, 72, 7, 2, 1]));
