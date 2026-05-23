/**
 * Given a string s, find the length of the longest substring without
 * repeating characters.
 *
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const map = {}
  let left = 0
  let lengthSubstring = 0

  for (let right = 0; right < s.length; right++) {
    const subString = s[right]

    if (subString in map && map[subString] >= left) {
      left = map[subString] + 1
    }

    map[subString] = right

    const currentLength = right - left + 1
    if (currentLength > lengthSubstring) {
      lengthSubstring = currentLength
    }
  }

  return lengthSubstring
}

console.assert(lengthOfLongestSubstring('abcabcbb') === 3, 'Test 1 failed')
console.assert(lengthOfLongestSubstring('bbbbb') === 1, 'Test 2 failed')
console.assert(lengthOfLongestSubstring('pwwkew') === 3, 'Test 3 failed')
console.assert(lengthOfLongestSubstring('') === 0, 'Test 4 failed')
console.assert(lengthOfLongestSubstring('au') === 2, 'Test 5 failed')

console.log('lengthOfLongestSubstring: all cases passed')
