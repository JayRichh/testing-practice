// takes an array of numbers and returns an object with the following properties: average, min, max and length.
function analyzeArray(array) {
  var sum = 0;
  var min = array[0];
  var max = array[0];
  var length = array.length;
  for (var i = 0; i < length; i++) {
    sum += array[i];
    if (array[i] < min) min = array[i];
    if (array[i] > max) max = array[i];
  }
  var average = sum / length;
  return {
    average: average,
    min: min,
    max: max,
    length: length
  };
}
module.exports = analyzeArray;