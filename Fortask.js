
const numbers = [1, 1211, 443, 4, 55, 6, 71, 81, 9]

function printoddnumbers(arr){
    for (let i=0; i<numbers.length; i++)
    {
        if (arr[i] % 2 !== 0)
        {
            console.log(arr[i])
        }
    }
}

console.log("Odd numbers in an array are:")
printoddnumbers(numbers);

//--------------------------------------------------------------------------

function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
  
  const inputString = "this is a sample title case example";
  
  const titleCaseString = toTitleCase(inputString);
  
  console.log(titleCaseString);

  //------------------------------------------------------------------------

const number = [1, 1211, 443, 4, 55, 6, 71, 81, 9]  
let sum=0
function arraysum(arr){

for (let i=0;i<arr.length;i++)
 {
    sum = sum+arr[i];
 }
 console.log(sum)
}

console.log("The sum of the array is")
arraysum(number)
//-----------------------------------------------------------

function isPrime(number) {
    if (number <= 1) {
      return false;
    }
    if (number <= 3) {
      return true;
    }
    if (number % 2 === 0 || number % 3 === 0) {
      return false;
    }
  
    for (let i = 5; i * i <= number; i += 6) {
      if (number % i === 0 || number % (i + 2) === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  function findPrimeNumbers(arr) {
    const primeNumbers = arr.filter((number) => isPrime(number));
    return primeNumbers;
  }
  

  const num = [1, 1211, 443, 4, 55, 6, 71, 81, 9] ;
  
  const primeNumbers = findPrimeNumbers(num);
  
  console.log("Prime numbers in the array:", primeNumbers);

  //------------------------------------------------------------------

  const words = ["racecar", "hello", "level", "world", "deified"];
  let string = ''
  let word=[]
  let word1=''
  let word2 = []
  function palindrome(arr){
    for (let i=0; i<arr.length; i++){
        string = arr[i];
        word1 = string.split('').reverse().join('');
        word.push(word1)
    }
    console.log(word)
    for (let i=0; i<arr.length; i++){
        if (words[i] == word[i])
        {
            word2.push(word[i])
        }
    }
    

    console.log(word2)
  }

  palindrome(words)
  //---------------------------------------------------------

  const nums1 = [1, 3];
  const nums2 = [2,7,8];

  let mergedarray=[];

  mergedarray = [...nums1, ...nums2].sort();

  console.log(mergedarray)
  
  let n= mergedarray.length;
  let median

  if(n%2 == 0){
    let mid = n/2;
    median = (mergedarray[mid]+ mergedarray[mid-1])/2;
  }
  else{
    median = mergedarray[Math.floor(n/2)]
  }

  console.log(median)
  //-----------------------------------------------------------------

  function removeDuplicates(arr) {
    const uniqueArray = [];
    
    for (let item of arr) {
      if (!uniqueArray.includes(item)) {
        uniqueArray.push(item);
      }
    }
  
    return uniqueArray;
  }
  
  
  const originalArray = [1, 2, 2, 3, 4, 4, 5, 5];
  
  const uniqueArray = removeDuplicates(originalArray);
  
  console.log("Original Array:", originalArray);
  console.log("Array with Duplicates Removed:", uniqueArray);

  //------------------------------------------------------------------------

  function rotateArray(arr, k) {
    const n = arr.length;
    k = k % n; // Ensure k is within the range of array length
  
    const rotatedArray = [];
  
    for (let i = 0; i < n; i++) {
      const newIndex = (i + n - k) % n;
      rotatedArray[newIndex] = arr[i];
    }
  
    return rotatedArray;
  }
  
  
  const originalArray1 = [1, 2, 3, 6, 43, 4, 5];
  const k = 3; // Number of positions to rotate
  
  const rotatedArray = rotateArray(originalArray1, k);
  
  console.log("Original Array:", originalArray1);
  console.log(`Array Rotated by ${k} positions:`, rotatedArray);


  var guvi = new geek();

  guvi.a = 10;
  
  guvi.b = 10;
  
  console.log(guvi);
  
  var geek = class geek {
  
    constructor(a, b) {
  
      this.a = a;
  
      this.b = b;
  
    }
  
  };