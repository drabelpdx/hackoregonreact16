
//Reduce
//var myArray = [1,2,3];

function addUpArray(array) {
  var sum = 0;
  array.forEach(function(num) {
    sum += num;
  });
  return sum;
};

//addUpArray(myArray);

//ES6
//const numbers = [10, 20, 30];

function addItUp(numbers) {
  return numbers.reduce(function(sum, number) {
    return sum + number;
  }, 0);
};

//addItUp(numbers);


//Concat
//var arr1 = [1,2,3];
//var arr2 = [4,5,6];

function concatMyArray(arr1, arr2) {
  arr2.forEach(function(num) {
    arr1.push(num);
  });
  return arr1;
}

//concatMyArray(arr1, arr2);

//ES6
function concatMyArrays(...arr) {
  const newArr = [];
  return newArr.concat( ...arr);
}


//Find
//var arrThing = [2,3,4,5];

function findMyItem(arr, item) {
  var arr2 = [];
  arr.forEach(function(thing) {
    if(thing !== item) {
      arr2.push(thing);
    };
  })
  return arr2
}

//findMyItem(arrThing, 3);

//ES6

function removeMyItem(arr, item) {
  return arr.filter(function(thing) {
    if(thing !== item){
      return thing
    }
  });
}

//removeMyItem(arrThing, 3);


//Replace
//var myWords = ["cat", "dog", "ice"];

function upperCaseMe(arr){
  var newArr = [];
  var vowels = ["a","e","i","o","u"];
  var isVowel = "";
  arr.forEach(function(word) {
    isVowel = word[0];
    if(vowels.indexOf(isVowel) >= 0 ) {
      word = word.toUpperCase();
    }
    newArr.push(word);
  });
  return newArr;
}

//upperCaseMe(myWords);
