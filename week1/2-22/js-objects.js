const MonkeyMaker = function (setName,setSpecies,setFoodsEaten) {
  this.name = setName
  this.species = setSpecies
  this.foodsEaten = setFoodsEaten
  this.eatSomething = function (thingAsString) {
    this.foodsEaten.push(thingAsString)
  }
  this.introduce = function () {
    return `Hi! My name is ${this.name}! My species is ${this.species}, and I\'ve eaten ${this.foodsEaten.join(', ')}.`
  }
}

const monkey1 = new MonkeyMaker('Bob','orangutan',['figs','bananas','tangerines'])
const monkey2 = new MonkeyMaker('Rob','baboon',['leaves','more leaves'])
const monkey3 = new MonkeyMaker('Harambe','gorilla',['a bullet','memes','the tears of millions'])

console.log(monkey1.introduce())
console.log(monkey2.introduce())
monkey2.eatSomething('even more leaves')
console.log(monkey2['introduce']())
console.log(monkey3.introduce())
