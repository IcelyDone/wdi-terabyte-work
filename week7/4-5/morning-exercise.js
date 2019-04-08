const isRgb = string => {
  if (string.search(/rgb\(\d+,\d+,\d+\)/) !== -1) {
    const array = string.match(/-?\d+/g)
    return array.every(num => num >= 0 && num <= 255)
  }  else {return false}
}

console.log(isRgb('rgb(255,200,200)'))

/*
  else if (string.search(/rgb\(\d+%,\d+%,\d+%\)/) !== -1) {
    const array = string.match(/-?\d+/g)
    return array.every(num => num >= 0 && num <= 255)
  } 
  else if (string.search(/rgba\(\d+,\d+,\d+\,\d\.?\d*)/) !== -1) {
    const array = string.match(/-?\d+/g)
    return array.every(num => num >= 0 && num <= 255)
  } 
  else if (string.search(/rgb\(\d+,\d+,\d+\)/) !== -1) {
    const array = string.match(/-?\d+/g)
    return array.every(num => num >= 0 && num <= 255)
  } 
*/

