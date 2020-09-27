// Find the longest substring with k unique characters in a given string
// Given a string you need to print longest possible substring that has exactly M unique characters. 
// If there are more than one substring of longest possible length, then print any one of them.
// Examples:

// "aabbcc", k = 1
// Max substring can be any one from {"aa" , "bb" , "cc"}.

// "aabbcc", k = 2
// Max substring can be any one from {"aabb" , "bbcc"}.

// "aabbcc", k = 3
// There are substrings with exactly 3 unique characters
// {"aabbcc" , "abbcc" , "aabbc" , "abbc" }
// Max is "aabbcc" with length 6.

// "aaabbb", k = 3
// There are only two unique characters, thus show error message.

let string = "aabbcc"
let k = 1

function findLongestSubstring(string, k) {
    // if string length is less than k, return null
    if (string.length < k) {
        return null
    }
    let maxSubstringArray = []
    let tempSubstringArray = []

    //turn string to array
    // let stringArray = string.split('')

    // iterate through string array
    for (let i = 0; i < string.length; i++) {
        if(string[i])
    }
    // if there are less unique characters than k, return null
    // keep count of each letter
    // 

}