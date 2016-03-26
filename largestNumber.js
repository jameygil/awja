
// Hello Cohort 12!
// Largest number in an array
var myArray = [1234, 23, 2, 1123, 3, 23423, 39];

var largest = function(array) {
  var max = 0;

  for (var i=0, len=array.length; i<len; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
};

console.log(largest(myArray));
