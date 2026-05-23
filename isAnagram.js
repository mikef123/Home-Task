/**
 * Given two strings s and t, return true if t is an anagram of s,
 * and false otherwise.
 *
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let counter = {}

  if (s.length !== t.length) return false
  for (let letter of s) {
    counter[letter] = (counter[letter] || 0) + 1
  }
  for (let letter of t) {
    if (counter[letter]) {
      counter[letter] = counter[letter] - 1
    } else {
      return false
    }
  }
  return true
}

console.assert(isAnagram('anagram', 'nagaram') === true, 'Test 1 failed')
console.assert(isAnagram('rat', 'car') === false, 'Test 2 failed')
console.assert(isAnagram('a', 'a') === true, 'Test 3 failed')
console.assert(isAnagram('ab', 'a') === false, 'Test 4 failed')
console.assert(isAnagram('listen', 'silent') === true, 'Test 5 failed')

console.log('isAnagram: all casses passed')
