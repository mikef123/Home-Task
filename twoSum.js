/**
 * Given an array of integers nums and an integer target, return indices of the
 * two numbers such that they add up to target.
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] + nums[i + 1] === target) {
      return [i, i + 1]
    }
  }
}

console.assert(
  JSON.stringify(twoSum([2, 7, 11, 15], 9)) === JSON.stringify([0, 1]),
  'Test 1 failed',
)
console.assert(
  JSON.stringify(twoSum([3, 2, 4], 6)) === JSON.stringify([1, 2]),
  'Test 2 failed',
)
console.assert(
  JSON.stringify(twoSum([3, 3], 6)) === JSON.stringify([0, 1]),
  'Test 3 failed',
)

console.log('twoSum: all test cases passed')
