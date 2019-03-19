const checkPalindrome = function(string) { let revvedString = ''
  for (i = string.length - 1; i >= 0; i--) {
    revvedString += string[i]
  }
  return revvedString === string
}

console.log(checkPalindrome('girafarig'))
console.log(checkPalindrome('nonsense'))
console.log(checkPalindrome('tarat'))
console.log(checkPalindrome('lmao'))
console.log(checkPalindrome('rats live on no evil star'))
