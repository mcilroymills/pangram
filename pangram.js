
module.exports = function (sentence) {

  //Alphabet array to compare with sentence
  this.alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

  //Returns an array of letters that alphabet & sentence have in common
  this.alphaArray = function () {
    return this.alphabet.filter(function (char) {
      if (sentence.toLowerCase().indexOf(char) === -1)
        return false;
      else
        return true;
    });
  };

  //Returns true if sentence is a pangram, false otherwise
  this.isPangram = function () {

    var array = this.alphaArray();

    if (array.length === this.alphabet.length)
      return true;
    else
      return false;
  };
}