const {
  maxOfTwoNumbers,
  findLongestWord,
  sumNumbers,
  sum,
  averageNumbers,
  averageWordLength,
  avg,
  uniquifyArray,
  doesWordExist,
  howManyTimes,
  greatestProduct
} = require('./../src/functions-and-arrays');

const shuffle = (currentArray) => {
  const array = [...currentArray];
  let counter = array.length;

  while (counter > 0) {
    let randomIndex = Math.floor(Math.random() * counter);
    counter--;
    let temp = array[counter];
    array[counter] = array[randomIndex];
    array[randomIndex] = temp;
  }
  return array;
};

//This is the maxOfTwoNumbers function to return the largest number
function maxOfTwoNumbers(num1, num2){
  return (num1>num2)?num1:num2; //using ternary operator
}

describe('Find the maximum', () => {
  test('should declare a function named maxOfTwoNumbers', () => {
    expect(typeof maxOfTwoNumbers).toBe('function');
  });

  test('should return greater of two arguments - if the first argument greater', () => {
    expect(maxOfTwoNumbers(2, 1)).toBe(2);
    expect(maxOfTwoNumbers(5, -7)).toBe(5);
  });

  test('should return greater of two arguments - if the second argument greater', () => {
    expect(maxOfTwoNumbers(1, 3)).toBe(3);
    expect(maxOfTwoNumbers(-5, 3)).toBe(3);
  });

  test('should return either arguments - if both arguments are equal', () => {
    expect(maxOfTwoNumbers(4, 4)).toBe(4);
  });
});

//This is the findLongestWord function to return longest word
function findLongestWord(words) {
  if (words.length === 0) {
      return null; // Handle the case where the input list is empty
  }

  let longestWord = words[0];
  
  for (let word of words) {
      if (word.length > longestWord.length) {
          longestWord = word;
      }
  }
  return longestWord;
}

describe('Find the longest word', () => {
  test('should declare a function named findLongestWord', () => {
    expect(typeof findLongestWord).toBe('function');
  });

  test('should return null when called with an empty array', () => {
    expect(findLongestWord([])).toBe(null);
  });

  test('should return the word when called with a single-word array', () => {
    expect(findLongestWord(['foo'])).toBe('foo');
  });

  test('should return the first occurrence of the word when longest have multiple occurrences ', () => {
    expect(findLongestWord(['foo', 'bar'])).toBe('foo');
    expect(findLongestWord(['bar', 'foo'])).toBe('bar');
  });

  test('should return the longest occurrence when it has multiple words', () => {
    let words = ['a', 'zab', '12abc', '$$abcd', 'abcde', 'rootlearn'];
    for (let i = 0; i < 10; i++) {
      words = shuffle(words);
      expect(findLongestWord(words)).toBe('rootlearn');
    }
  });
});

// This is the sumNumbers function to calculate the sum of the numbers in the array
function sumNumbers(numbers){
  let summ=0;
  for(num of numbers){
    summ+=num;
  }
  return summ;
}

describe('Calculate the sum of array of numbers', () => {
  test('should declare a function named sumNumbers', () => {
    expect(typeof sumNumbers).toBe('function');
  });

  test('should return zero if receives an empty array when called', () => {
    expect(sumNumbers([])).toBe(0);
  });

  test('should return the sum with one number array', () => {
    expect(sumNumbers([4])).toBe(4);
  });

  test('should return zero if all elements are zero', () => {
    expect(sumNumbers([0, 0, 0, 0, 0])).toBe(0);
  });

  test('should return the sum when passed array of numbers', () => {
    expect(sumNumbers([10, 5, 4, 32, 8])).toBe(59);
  });
});

/*This is the sum() function to calculate the sum of the array
  calculate the summ of the numbers in the array. If there are strings, 
  then calculate the length of the string the add to the sum */
function sum(mixedArr){
  let mixedArrSum=0;
  for(item of mixedArr){
    if(typeof(item)==="number"){
      mixedArrSum += item;
    }
    else if(typeof(item)==="boolean"){
      mixedArrSum += (item==true)?1:0;
    }
    else if(typeof(item)==="string"){
      mixedArrSum += item.length;
    }
  }
}

describe('Bonus: Calculate the sum', () => {
  test('should declare a function named sum', () => {
    expect(typeof sum).toBe('function');
  });

  test('should return zero if receives an empty array when called', () => {
    expect(sum([])).toBe(0);
  });

  test('should return the sum with one number array', () => {
    expect(sum([4])).toBe(4);
  });

  test('should return zero if all elements are zero', () => {
    expect(sum([0, 0, 0, 0, 0])).toBe(0);
  });

  test('should return the sum when passed array of numbers', () => {
    expect(sum([10, 5, 4, 32, 8])).toBe(59);
  });

  test('should return the sum when passed array of strings', () => {
    expect(sum(['ana', 'marco', 'nicolas', 'tania', 'ptwd'])).toBe(24);
  });

  test('should return the sum when passed array of mixed strings and numbers - ', () => {
    expect(sum([6, 12, 'miami', 1, 'barca', '200', 'lisboa', 8, 10])).toBe(56);
  });
  test('should return the sum when passed array of mixed strings, numbers and booleans - ', () => {
    // false is counted as 0
    expect(sum([6, 12, 'miami', 1, 'barca', '200', 'lisboa', 8, false])).toBe(46);
    // true is counted as 1
    expect(sum([6, 12, 'miami', 1, 'barca', '200', 'lisboa', 8, true])).toBe(47);
  });
  test('should throw an error when unsupported data type (object or array) present in the array', () => {
    expect(() => sum([6, 12, 'miami', 1, 'barca', '200', 'lisboa', 8, [], {}])).toThrow(
      new Error("Unsupported data type sir or ma'am")
    );
  });
});

//This is the function to calculate the average of the numbers in the array.
function averageNumbers(numbers){
  return sumNumbers(numbers)/numbers.length;
}

describe('Calculate the average of an array of numbers', () => {
  test('should declare a function named averageNumbers', () => {
    expect(typeof averageNumbers).toBe('function');
  });

  test('should return null if receives an empty array when called', () => {
    expect(averageNumbers([])).toBe(null);
  });

  test('should return the average of a one-element array', () => {
    expect(averageNumbers([9])).toBe(9);
  });

  test('should return the average even with negative values', () => {
    expect(averageNumbers([9, -3, -4, 6])).toBe(2);
  });

  test('should return the average of the array', () => {
    expect(averageNumbers([9, 10, 82, 92, 32, 102, 58])).toBe(55);
  });
});

//This is the averageWordLength() function to calculate the average length of the words in an array
function averageWordLength(words){
  let wordLength=0;
  for(item of words){
    wordLength += item.length;
  }
  return wordLength/words.length;
}

describe('Calculate the average of an array of strings', () => {
  test('should declare a function named averageWordLength', () => {
    expect(typeof averageWordLength).toBe('function');
  });

  test('should return null if receives an empty array when called', () => {
    expect(averageWordLength([])).toBe(null);
  });

  test('should return the average of a one-element array', () => {
    expect(averageWordLength(['rootlearn'])).toBe(9);
  });

  test('should return the average of a the array', () => {
    expect(
      averageWordLength(['Banglore', 'Madrid', 'Barcelona', 'Paris', 'Miami', 'Mexico', 'Berlin', 'Programmers'])
    ).toBe(7);
  });
});

/*This is the avg() function to calculate the average length of the mixed array
  that contains numbers, strings and boolean data types*/
function avg(mixedArr){
  return sum(mixedArr)/mixedArr.length;
}

describe('Bonus: Calculate the average of a mixed elements array', () => {
  test('should declare a function named avg', () => {
    expect(typeof avg).toBe('function');
  });

  test('should return null if receives an empty array when called', () => {
    expect(avg([])).toBe(null);
  });

  test('should return the average of the array', () => {
    // false is counted as 0
    expect(avg([6, 12, 'miami', 1, 'barca', '200', 'lisboa', 8, false])).toBe(46/9);
    // true is counted as 1
    expect(avg([6, 12, 'miami', 1, 'barca', '200', 'lisboa', 8, true])).toBe(47/9);
  });
});

//This is the uniquifyArray() to return a new array with unique elements
/*
This is the formal approach
function uniquifyArray(words){
  let uniqueArray = [];
  for(let i=0;i<words.length;i++){
    if(uniqueArray.indexOf(words[i]===-1)){
      uniqueArray.push(words[i]);
    }
  }
  return uniqueArray;
}*/

// This is the optimal solution
function uniquifyArray(words){
  return [...new Set(words)];
}

describe('Unique array', () => {
  test('should declare a function named uniquifyArray', () => {
    expect(typeof uniquifyArray).toBe('function');
  });

  test('should return null if receives an empty array when called', () => {
    expect(uniquifyArray([])).toEqual(null);
  });

  test('should return the correct uniqified array when an array of the same elements passed as argument', () => {
    expect(uniquifyArray(['rootlearn', 'rootlearn', 'rootlearn'])).toEqual(['rootlearn']);
  });

  test('should return the same array when no element is repeated', () => {
    expect(uniquifyArray(['Cat', 'Dog', 'Cow'])).toEqual(['Cat', 'Dog', 'Cow']);
  });

  test('should return the uniquified array', () => {
    expect(
      uniquifyArray(['iPhone', 'Samsung', 'Android', 'iOS', 'iPhone', 'Samsung', 'Nokia', 'Blackberry', 'Android'])
    ).toEqual(['iPhone', 'Samsung', 'Android', 'iOS', 'Nokia', 'Blackberry']);
  });
});

//This is the doesWordExist() function to check whether the given word is existed in the array or not.
/*function doesWordExist(words,word){
  for(let i=0;i<words.length;i++){
    if(words[i]===word){
      return true;
    }
  }
  return false;
}*/
function doesWordExist(words, word){
  const wordSet = new Set(words);
  return wordSet.has(word);
}


describe('Find elements', () => {
  test('should declare a function named doesWordExist', () => {
    expect(typeof doesWordExist).toBe('function');
  });

  test('should return null if receives an empty array when called', () => {
    expect(doesWordExist([])).toBe(null);
  });

  test('should return true if the word we are looking for is the only one in the array', () => {
    expect(doesWordExist(['machine'], 'machine')).toBe(true);
  });

  test('should return false if the word we are looking for is not in the array', () => {
    expect(doesWordExist(['machine', 'poison', 'eat', 'apple', 'horse'], 'ratatouille')).toBe(false);
  });

  test('should return true if the word we are looking for is in the array', () => {
    expect(doesWordExist(['pizza', 'sandwich', 'snack', 'soda', 'book', 'computer'], 'book')).toBe(true);
  });
});

//This is the howManyTimes() function to return the count of the word in the array
function howManyTimes(words, word){
  let count=0;
  for(item of words){
    if(word==item){
      count++;
    }
  }
  return count;
}

describe('Count repetition', () => {
  test('should declare a function named howManyTimes', () => {
    expect(typeof howManyTimes).toBe('function');
  });

  test('should return 0 (zero) if receives an empty array when called', () => {
    expect(howManyTimes([])).toBe(0);
  });

  test('should return 1 (one) when the word appears only one time in the array', () => {
    expect(howManyTimes(['basketball', 'football', 'tennis'], 'tennis')).toBe(1);
  });

  test("should return 0 (zero) when the word doesn't appear in the array", () => {
    expect(howManyTimes(['basketball', 'football', 'tennis'], 'rugby')).toBe(0);
  });

  test('should return 5 (five) when the word appears 5 times in the array', () => {
    expect(
      howManyTimes(
        [
          'basketball',
          'football',
          'tennis',
          'rugby',
          'rugby',
          'ping pong',
          'rugby',
          'basketball',
          'rugby',
          'handball',
          'rugby'
        ],
        'rugby'
      )
    ).toBe(5);
  });
});

function greatestProduct(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  let maxProduct = 0;

  // Function to check the product of four numbers in a given array
  function checkProduct(arr) {
    for (let i = 0; i <= arr.length - 4; i++) {
      const product = arr[i] * arr[i + 1] * arr[i + 2] * arr[i + 3];
      if (product > maxProduct) {
        maxProduct = product;
      }
    }
  }

  // Check horizontally
  for (let row = 0; row < rows; row++) {
    checkProduct(matrix[row]);
  }

  // Check vertically
  for (let col = 0; col < cols; col++) {
    const verticalArray = matrix.map(row => row[col]);
    checkProduct(verticalArray);
  }

  // Check diagonally (left-to-right)
  for (let row = 0; row <= rows - 4; row++) {
    for (let col = 0; col <= cols - 4; col++) {
      const diagArray = [
        matrix[row][col],
        matrix[row + 1][col + 1],
        matrix[row + 2][col + 2],
        matrix[row + 3][col + 3]
      ];
      checkProduct(diagArray);
    }
  }

  // Check diagonally (right-to-left)
  for (let row = 0; row <= rows - 4; row++) {
    for (let col = 3; col < cols; col++) {
      const diagArray = [
        matrix[row][col],
        matrix[row + 1][col - 1],
        matrix[row + 2][col - 2],
        matrix[row + 3][col - 3]
      ];
      checkProduct(diagArray);
    }
  }

  return maxProduct;
}

function greatestProductOfDiagonals(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  let maxProduct = 0;

  // Function to check the product of four numbers in a given diagonal array
  function checkProduct(arr) {
    for (let i = 0; i <= arr.length - 4; i++) {
      const product = arr[i] * arr[i + 1] * arr[i + 2] * arr[i + 3];
      if (product > maxProduct) {
        maxProduct = product;
      }
    }
  }

  // Check diagonals (top-left to bottom-right)
  for (let row = 0; row <= rows - 4; row++) {
    for (let col = 0; col <= cols - 4; col++) {
      const diagArray = [
        matrix[row][col],
        matrix[row + 1][col + 1],
        matrix[row + 2][col + 2],
        matrix[row + 3][col + 3]
      ];
      checkProduct(diagArray);
    }
  }

  // Check diagonals (top-right to bottom-left)
  for (let row = 0; row <= rows - 4; row++) {
    for (let col = 3; col < cols; col++) {
      const diagArray = [
        matrix[row][col],
        matrix[row + 1][col - 1],
        matrix[row + 2][col - 2],
        matrix[row + 3][col - 3]
      ];
      checkProduct(diagArray);
    }
  }

  return maxProduct;
}

describe('Bonus Quest - greatestProduct', () => {
  test('should declare a function named greatestProduct', () => {
    expect(typeof greatestProduct).toBe('function');
  });

  test('should return 1 (one) when all numbers of the arrays are 1', () => {
    let matrix = [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ];
    expect(greatestProduct(matrix)).toBe(1);
  });

  test('should return 16 when all the numbers of the arrays are 2', () => {
    let matrix = [
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
    ];
    expect(greatestProduct(matrix)).toBe(16);
  });
});
