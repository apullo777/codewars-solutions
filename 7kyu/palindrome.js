function isPalindrome(str) {
    var re = /[\W_]/g;
    var lowRegStr = str.toString().toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join('');
    return reverseStr === lowRegStr;
  }