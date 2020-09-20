// Write a function to merge our arrays of orders into one sorted array.

const myArray = [3, 4, 8, 10, 11, 15];
const alicesArray = [1, 5, 8, 12, 14, 19];

//console.log(mergeArrays(myArray, alicesArray));
// logs [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]

// merge sort
// create helper merge function that sorts each sub array

function mergeArrays(arr1, arr2) {
    let sorted = []
    let i = 0
    let j = 0

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            sorted.push(arr1[i])
            i++
        } else {
            sorted.push(arr2[j])
            j++
        }  
    }

    if (arr1[i]) {
        return sorted.concat(arr1.slice(i))
    }

    if (arr2[j]) {
        return sorted.concat(arr2.slice(j))
    }

    return sorted
}



// their solution
function mergeArrays(myArray, alicesArray) {

    // Set up our mergedArray
    const mergedArray = [];
  
    let currentIndexAlices = 0;
    let currentIndexMine = 0;
    let currentIndexMerged = 0;
  
    while (currentIndexMerged < (myArray.length + alicesArray.length)) {
  
      const isMyArrayExhausted = currentIndexMine >= myArray.length;
      const isAlicesArrayExhausted = currentIndexAlices >= alicesArray.length;
  
      // Case: next comes from my array
      // My array must not be exhausted, and EITHER:
      // 1) Alice's array IS exhausted, or
      // 2) The current element in my array is less
      //    than the current element in Alice's array
      if (!isMyArrayExhausted && (isAlicesArrayExhausted ||
        (myArray[currentIndexMine] < alicesArray[currentIndexAlices]))) {
  
        mergedArray[currentIndexMerged] = myArray[currentIndexMine];
        currentIndexMine++;
  
        // Case: next comes from Alice's array
      } else {
        mergedArray[currentIndexMerged] = alicesArray[currentIndexAlices];
        currentIndexAlices++;
      }
  
      currentIndexMerged++;
    }
  
    return mergedArray;
  }