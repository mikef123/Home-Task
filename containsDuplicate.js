/**
 * Given an integer array nums, return true if any value appears at least twice
 * in the array, and return false if every element is distinct.
 *
 * @param {number[]} nums
 * @return {boolean}
 */

var containsDuplicate = function (nums) {
  const map = {}

  for (let num of nums) {
    if (num in map) return true
    map[num] = 1
  }

  return false
}

console.assert(containsDuplicate([1, 2, 3, 1]) === true, 'Test 1 failed')
console.assert(containsDuplicate([1, 2, 3, 4]) === false, 'Test 2 failed')
console.assert(
  containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]) === true,
  'Test 3 failed',
)
console.assert(containsDuplicate([]) === false, 'Test 4 failed')
console.assert(containsDuplicate([1]) === false, 'Test 5 failed')

console.log('containsDuplicate: all cases passed')
