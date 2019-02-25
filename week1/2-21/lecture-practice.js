const yourMoney = 50;
const catPrice = 100;

if (yourMoney === catPrice) {
  console.log('You have just enough money to buy a cat!')
} else if (yourMoney > catPrice) {
  console.log('You can buy a cat and will have dollars left over')
} else if (yourMoney < catPrice) {
  console.log('You cannot buy a cat. You need more dollars :(')
}

let n = 5;

switch(n) {
 case 1:
  console.log('1 is actually not prime!');
  break;
 case 2: 
  console.log('2 is actually the smallest prime!');
  break;
 case 3:
 case 5:
 case 7:
  console.log(n + ' is prime!');
  break;
 case 4:
 case 6:
 case 8:
 case 9:
  console.log(n + ' is not prime :(');
  break;
 default:
  console.log('idk if ' + n + ' is prime. google it, ask yourself, ask your friend.')
}

