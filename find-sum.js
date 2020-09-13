// Given an array of integers and a target sum, return true if 2 elements add up to the target sum, false if not

// [2, 1, 5, 7] sum = 8
// [2, 4, 5, 7] sum = 8

// Using a set for better time complexity O(n)
// {6, 7, 3}
//{ 2, 1, 5, 7}

// O(n^2)
function findSum(array, sum) {
    
    for (let i = 0; i < array.length - 1; i++) {
        let missingNum = sum - array[i]
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] === missingNum) {
                return true
            }
        }   
    }
    return false
    // return true or false
 }