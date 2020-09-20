// Write an efficient function that checks whether any permutation of an input string is a palindrome.

// You can assume the input string only contains lowercase letters.

// Examples:

// "civic" should return true
// "ivicc" should return true
// "civil" should return false
// "livci" should return false


function possiblePalindrome(string) {
    if (string.length <= 1) {
        return true
    }
    
    let letterCount = {}
    for (i = 0; i < string.length; i++) {
        if (letterCount[string[i]]) {
            letterCount[string[i]]++
        } else {
            letterCount[string[i]] = 1
        }
    }
    console.log(letterCount)
    // code to check if more than one letter appears an odd number of times
    // return false if odd characters > 1, else return true
    let hasOddNumber = false
    for (let letter in letterCount) {
        if (letterCount[letter] % 2 === 1) {
            if (hasOddNumber) {
                return false
            }
            hasOddNumber = true
        }
    }
    return true   
}


// their solution
function hasPalindromePermutation(theString) {

    // Track characters we've seen an odd number of times
    const unpairedCharacters = new Set();
  
    for (let char of theString) {
      if (unpairedCharacters.has(char)) {
        unpairedCharacters.delete(char);
      } else {
        unpairedCharacters.add(char);
      }
    }
  
    // The string has a palindrome permutation if it
    // has one or zero characters without a pair
    return unpairedCharacters.size <= 1;
  }