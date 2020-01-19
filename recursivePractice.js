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

function fibonacci(number, list = []) {
  if (number <= 1) {
    return 1;
  }
  if (number <= 0) {
    return "please use a positive number";
  }

  const sum = fibonacci(number - 1) + fibonacci(number - 2);
  list.push(sum);
  return sum;
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

function anagram(string, result = []) {
  if (string.length <= 1) {
    return string;
  }
  if ((string.length = 2)) {
    const first = string.charAt(0);
    const second = string.slice(1);
    const switchedLetters = second + first;
    return switchedLetters;
  }

  const firstLetter = string.charAt(0);
  // const reorder = string.slice(1);

  // result.push(` ${firstLetter + anagram(anagram(reorder, result), result)}`);
  // return result;
  return firstLetter + anagram(string.slice(1));
}

anagram("dog");

function maze(maze, path, x, y, directionMoving) {
  //doesn't just wind and unwind,
  //check maze solitions when you get desparate
}

//find greatest divisor for number

function divisor(inputnumber, divisornumber) {
  divisornumber = inputnumber - 1;
  if (inputnumber % divisornumber === 0) {
    return divisornumber;
  }

  return divisor(inputnumber, divisornumber);
}
divisor(9); //way off

//get integers in range between x y
//i,e, (9,2) 3,4,5,6,7,8

function getInRange(x, y, total = []) {
  let start;
  let end;
  if (x > y) {
    start = y;
    end = x;
  } else {
    start = x;
    end = y;
  }

  if (start === end - 1) {
    return total;
  }

  total.push(start + 1);
  return getInRange(start + 1, end, total);
}
getInRange(9, 6);
///GOT IT!!! Plus in mine the numbers can be in any order

function addArray(array) {
  if (array.length === 1) {
    return array[0];
  }

  return addArray(array.slice(1)) + array[0];
}
addArray([4, 3, 2, 1]);
//I think this was a duplicate but I got it pretty quick

function exponent(base, multiplier) {
  if (multiplier === 1) {
    return base;
  }

  return exponent(base, multiplier - 1) * base;
}
exponent(8, 2);
//also a repeat but got it fast

function mergeSort(array, result = []) {
  if (array.length === 1) {
    if (array[0] > result[0]) {
      result.push(array[0]);
    } else result.unshift(array[0]);
    return result;
  }

  if (result.length === 0) {
    result.push(array[0]);
  }
  if (array[0] > result[0]) {
    //this if statement always runs for some reason
    result.push(array[0]);
  }
  if (result[0] > array[0]) {
    result.unshift(array[0]);
  }

  return mergeSort(array.slice(1), result);
}
//mergeSort is about dividing comparing and combining
//mergeSort is a specific kind of algorithm
//what I did was just a sort
mergeSort([1, 32, 11, 12, 14, 76, 21]);

function mergeSort2(array, result = []) {
  function compareAndAdd(num1, num2) {
    //finish when brain wakes up
  }
}

function mergeSort3(array) {
  if (array.length < 2) {
    return array;
  }
  const middle = Math.floor(array.length / 2);

  const leftSide = array.splice(0, middle);
  const rightSide = array.splice(middle, array.length);

  function merge(left, right) {
    let result = [];
    while (left.length && right.length) {
      if (left[0] <= right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
    while (left.length) result.push(left.shift());
    while (right.length) result.push(right.shift());

    return result;
  }

  return merge(mergeSort3(leftSide), mergeSort3(rightSide));
}

mergeSort3([1, 5, 17, 2, 48, 91, 2, 65]);
