function caesarCipher(str, num) {
  // caesarCipher is a function that takes a string and a number as arguments 
  // and returns a string that is the original string shifted by the number 
  // of letters in the alphabet.
  num = num % 26;
  var lowerCaseString = str.toLowerCase();
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var newString = '';

  for (var i = 0; i < lowerCaseString.length; i++) {
    var currentLetter = lowerCaseString[i];
    if (currentLetter === ' ') {
      newString += currentLetter;
      continue;
    }
    var currentIndex = alphabet.indexOf(currentLetter);
    var newIndex = currentIndex + num;
    if (newIndex > 25) newIndex = newIndex - 26;
    if (newIndex < 0) newIndex = 26 + newIndex;
    if (str[i] === str[i].toUpperCase()) {
      newString += alphabet[newIndex].toUpperCase();
    } else newString += alphabet[newIndex];
  }

  return newString;
}
module.exports = caesarCipher;