
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
