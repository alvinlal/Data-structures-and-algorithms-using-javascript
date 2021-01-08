function fib_memo(n, memo = [undefined, 1, 1]) {
  if (memo[n] !== undefined) return memo[n];
  var result = fib_memo(n - 1, memo) + fib_memo(n - 2, memo);
  memo[n] = result;
  return result;
}

function fib_table(n) {
  if (n < 2) return 1;
  var table = [0, 1, 1];

  for (let i = 3; i <= n; i++) {
    table[i] = table[i - 1] + table[i - 2];
  }

  return table[n];
}

console.log(fib_memo(1000));
// console.log(fib_memo(10000)); // will cause call stack overflow
console.log(fib_table(10000)); // no problem
