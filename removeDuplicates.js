/**
 * Given an integer array nums sorted in non-decreasing order, remove the duplicates
 * in-place such that each unique element appears only once.
 * Return the number of unique elements.
 *
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0

  if (nums.length === 0) return 0
  let unique = 0
  for (let number = 0; number < nums.length - 1; number++) {
    if (nums[number] !== nums[number + 1]) {
      nums[unique] = nums[number]
      unique++
    }
  }
  nums[unique] = nums[nums.length - 1]
  return unique + 1
}

console.assert(removeDuplicates([1, 1, 2]) === 2, 'Test 1 failed')
console.assert(
  removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]) === 5,
  'Test 2 failed',
)
console.assert(removeDuplicates([1]) === 1, 'Test 3 failed')
console.assert(removeDuplicates([]) === 0, 'Test 4 failed')
console.assert(removeDuplicates([1, 2, 3]) === 3, 'Test 5 failed')

console.log('removeDuplicates: all test cases passed')
