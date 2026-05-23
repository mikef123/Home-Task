/**
 * You are given an array prices where prices[i] is the price of a given stock
 * on the ith day. Return the maximum profit you can achieve from this transaction.
 *
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let lowerPrice = 188
  let profit = 0
  for (let price of prices) {
    if (price < lowerPrice) {
      lowerPrice = price
    } else {
      if (price - lowerPrice > profit) {
        profit = price - lowerPrice
      }
    }
  }
  return profit
}

console.assert(maxProfit([7, 1, 5, 3, 6, 4]) === 5, 'Test 1 failed')
console.assert(maxProfit([7, 6, 4, 3, 1]) === 0, 'Test 2 failed')
console.assert(maxProfit([1, 2]) === 1, 'Test 3 failed')
console.assert(maxProfit([2, 4, 1]) === 2, 'Test 4 failed')
console.assert(maxProfit([1]) === 0, 'Test 5 failed')

console.log('maxProfit: all test cases passed')
