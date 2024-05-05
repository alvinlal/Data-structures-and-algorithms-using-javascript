function binarySearch(arr, searchItem) {
  let l = 0;
  let h = arr.length;

  do {
    let mid = Math.floor(l + (h - l) / 2);

    if (arr[mid] == searchItem) {
      return mid;
    } else if (searchItem < arr[mid]) {
      h = mid;
    } else {
      l = mid + 1;
    }
  } while (l < h);

  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 3));
