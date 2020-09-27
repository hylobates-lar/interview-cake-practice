// print a count of all the different "words" in a text file. Use any definition of word that makes logical sense or makes your job easy.
// The output should be sorted like this:
// ```17 a14 the9 of9 in8 com7 you7 that7 social6 to```
// For this input file, the word "a" occurred 17 times, "the" 14 times, etc.

let text = "This is a sample sentence with words and stuff and this is a sentence again although not a good one."
let textArray = text.replace(/[^a-z' ']+/gi, '').toLowerCase().split(' ')

function wordCount(textArray) { 
    return textArray.reduce((count, word) => { 
        count[word] = (count[word] || 0) + 1; return count; 
    }, {})}
wordCount(textArray)