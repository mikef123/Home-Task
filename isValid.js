/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
 * determine if the input string is valid.
 *
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const queue = []
  const map = {
    ')': '(',
    '}': '{',
    ']': '[',
  }

  for (let characther of s) {
    if (characther === '(' || characther === '{' || characther === '[') {
      queue.push(characther)
    } else {
      if (queue.length === 0) return false

      const top = queue.pop()
      if (top !== map[characther]) {
        return false
      }
    }
  }

  if (queue.length > 0) return false
  return true
}

console.assert(isValid('()') === true, 'Test 1 failed')
console.assert(isValid('()[]{}') === true, 'Test 2 failed')
console.assert(isValid('(]') === false, 'Test 3 failed')
console.assert(isValid('([)]') === false, 'Test 4 failed')
console.assert(isValid('{[]}') === true, 'Test 5 failed')
console.assert(isValid('') === true, 'Test 6 failed')

console.log('isValid: all cases passed')
