function min(a, b) {
 if (a > b) {return b}
 else {return a}
}

function isEven(num) {
 if (num === 0) {return true}
 else if (num === 1 ) {return false}
 else if (num < 0 || num % 1 !== 0) {return 'Please input a non-negative integer'}
 else {return isEven(num-2)};
}

function countBs(string) {
 return countChar(string, "B");
}   

function countChar(string, chr) {
 let chrs = 0;
 for (i = 0; i < string.length; i++) {
  if (string[i] === chr) {
   chrs++;
  }
 }
 return chrs;
}
  

console.log(min(10,5));
console.log(isEven(5));
console.log(isEven(10));
console.log(isEven(0));
console.log(isEven(-1));
console.log(isEven(2.5));
console.log(countBs('BarBeCue'));
console.log(countBs('Brawl'));
console.log(countBs('brother'));
console.log(countChar('mommy','m'));
console.log(countChar('bothersome','e'));
console.log(countChar('something','L'));

