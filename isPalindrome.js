/**
 *  A phrase is a palindrome if, after converting all uppercase letters into
 * lowercase letters and removing all non-alphanumeric characters, it reads
 * the same forward and backward.
 *
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let left = 0
  let right = s.length - 1

  while (left < right) {
    while (left < right && !/[a-z0-9]/i.test(s[left])) left++
    while (left < right && !/[a-z0-9]/i.test(s[right])) right--

    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false
    }

    left++
    right--
  }

  return true
}

console.assert(
  isPalindrome('A man, a plan, a canal: Panama') === true,
  'Test 1 failed',
)
console.assert(isPalindrome('race a car') === false, 'Test 2 failed')
console.assert(isPalindrome(' ') === true, 'Test 3 failed')
console.assert(
  isPalindrome('Was it a car or a cat I saw?') === true,
  'Test 4 failed',
)
console.assert(isPalindrome('hello') === false, 'Test 5 failed')

console.log('isPalindrome: all cases passed')
