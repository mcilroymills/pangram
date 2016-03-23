
module.exports = function (sentence) {

  this.alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

  this.isPangram = function () {

    var array = this.alphabet.filter(function (char) {
      if (sentence.toLowerCase().indexOf(char) === -1)
        return false;
      else
        return true;
    });

    if (array.length === this.alphabet.length)
      return true;
    else
      return false;
  }
}