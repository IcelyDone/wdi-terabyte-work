const person = {
  name: 'Soren Soroush',
  age: 21,
  hometown: 'Brooklyn'
}

const {hometown, ...other} = person

const evens = [2,4,6,8]
const odds = [1,3,5,7,9]

const nums = [...evens, ...odds]

const faveFoods = {
  faveFood1: 'foodPlace1',
  faveFood2: 'foodPlace2',
  faveFood3: 'foodPlace3'
} 

const friendFaveFoods = {
  faveFood4: 'foodPlace4',
  faveFood5: 'foodPlace5',
  faveFood6: 'foodPlace6'
}

const allFoods = {...faveFoods, ...friendFaveFoods}

console.log(other)
console.log(nums)
console.log(allFoods)
