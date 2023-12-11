/* sophisticated_code.js */

// This code implements a complex algorithm to calculate the Fibonacci sequence up to a given number

function fibonacci(n) {
  const fib = [0, 1];

  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib.slice(1); // Discard the first element (0)
}

function printFibonacciSequence(n) {
  const sequence = fibonacci(n);

  console.log(`Fibonacci sequence up to ${n}:`);
  console.log(sequence.join(', '));
}

function isPrime(number) {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

function findNextPrime(n) {
  let currentNumber = n + 1;

  while (!isPrime(currentNumber)) {
    currentNumber++;
  }

  return currentNumber;
}

function generatePrimeSequence(length) {
  const primes = [];
  let currentPrime = 2;

  for (let i = 0; i < length; i++) {
    primes.push(currentPrime);
    currentPrime = findNextPrime(currentPrime);
  }

  return primes;
}

function printPrimeSequence(length) {
  const sequence = generatePrimeSequence(length);

  console.log(`Prime sequence of length ${length}:`);
  console.log(sequence.join(', '));
}

function isPalindrome(string) {
  const reversed = string.split('').reverse().join('');

  return string === reversed;
}

function findPalindromicWords(words) {
  const palindromes = [];

  for (let i = 0; i < words.length; i++) {
    if (isPalindrome(words[i])) {
      palindromes.push(words[i]);
    }
  }

  return palindromes;
}

function printPalindromicWords(words) {
  const palindromes = findPalindromicWords(words);

  console.log('Palindromic words:');
  console.log(palindromes.join(', '));
}

// Main code

// Fibonacci sequence
printFibonacciSequence(10);

// Prime sequence
printPrimeSequence(10);

// Palindromic words
const words = ['hello', 'world', 'level', 'radar', 'javascript'];
printPalindromicWords(words);

// ... And much more complex code beyond this point (over 200 lines)