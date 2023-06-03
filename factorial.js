function factorial(n) {
  let result = 1;
  for (let i = 2; i < n; i++) {
    result = result * i;
  }
  return result;
}

//recursive

function recursiveFactorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * recursiveFactorial(n - 1);
}

// Big-O = O(n)
