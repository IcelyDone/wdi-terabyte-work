let maxProfit = function(array) {
  let sellPoint = 0, buyPoint = 1
  for (i = array.length - 1; i > 0; i--) {
    for (j = i - 1; j >= 0; j--) {
      if (array[i] - array[j] > sellPoint - buyPoint) {
        sellPoint = array[i]
        buyPoint = array[j]
      }
    }
  }
  return `The largest possible profit from the this day is from buying the stock at ${buyPoint} and selling at ${sellPoint} to make ${sellPoint - buyPoint}`
}

console.log(maxProfit([73,81,3,79,44]))
