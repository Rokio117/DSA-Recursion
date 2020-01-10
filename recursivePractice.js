function sheep(number) {
  if (number <= 0) {
    console.log("All sheep jumped over the fence");
    return;
  }
  console.log("Another sheep jumps over the fence");
  sheep(number - 1);
}

sheep(3);
//got this one on my own after watching some vids

function powerCalculator(base, exponent) {
  if (exponent <= 1) {
    return base;
  }

  return powerCalculator(base, exponent - 1) * base;
}
powerCalculator(5, 3);
//git it after taking a

function reverseString(string) {
  if (string === "") {
    return "";
  }

  return reverseString(string.substring(1)) + string.charAt(0);
}

reverseString("string");

//looked up help for this one

function triangularNumberGenerator(number) {
  if (number <= 0) {
    return number;
  }
  return triangularNumberGenerator(number - 1) + number;
}

triangularNumberGenerator(3); //expect 6

//didn't return number first time but got it 2nd time

function fibonacci(number) {
  if (number <= 1) {
    return 1;
  }

  fibonacci(number - 1) + fibonacci(number - 2);
}

fibonacci(8);
//i can return the number of the sequence but not in list form

function factorial(number) {
  if (number <= 1) {
    return number;
  }

  return factorial(number - 1) * number;
}

factorial(5); //expect 120
//got it almot** first try. forgot to return the number at the end

function anagram(string) {
  if (!string.length) {
    return;
  }

  const firstLetter = string.charAt(0);
  const reorder = string.slice(1);
  console.log(reorder);
  return [firstLetter + anagram(reorder)];
}

anagram("east");
