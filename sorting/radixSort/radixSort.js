function radixSort(arr) {
  // 1. get the number with mostDigits from the array
  const maxDigitsNum = mostDigits(arr);

  for (let k = 0; k < maxDigitsNum; k++) {
    let digitsBucket = Array.from({ length: 10 }, () => []);

    for (let i = 0; i < arr.length; i++) {
      let digit = getDigit(arr[i], k);
      digitsBucket[digit].push(arr[i]);
    }
    arr = [].concat(...digitsBucket);
  }

  return arr;
}

function getDigit(num, pos) {
  return Math.floor(Math.abs(num) / Math.pow(10, pos)) % 10;
}

function digitCount(num) {
  if (num == 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(arr) {
  let maxDigits = 0;
  for (let i = 0; i < arr.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(arr[i]));
  }
  return maxDigits;
}

console.log(radixSort([5555, 11, 1, 2, 3, 122, 33, 444, 444]));
