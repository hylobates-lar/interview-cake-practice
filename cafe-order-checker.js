// Given all three arrays, write a function to check that my service is first-come, first-served. All food should come out in the same order customers requested it.
// We'll represent each customer order as a unique integer.

// As an example,

//   Take Out Orders: [1, 3, 5]
//  Dine In Orders: [2, 4, 6]
//   Served Orders: [1, 2, 4, 6, 5, 3]
// would not be first-come, first-served, since order 3 was requested before order 5 but order 5 was served first.

// But,

let takeOut = [17, 8, 24]
let dineIn = [12, 19, 2]
let served = [17, 8, 12, 19, 24, 2]
// would be first-come, first-served.

// Note: Order numbers are arbitrary. They do not have to be in increasing order.

function orderChecker(takeOut, dineIn, served) {
    let takeOutCopy = takeOut.slice(0)
    let dineInCopy = dineIn.slice(0)

    for (i = 0; i < served.length; i++) {
        if (served[i] !== takeOutCopy[0] && served[i] !== dineInCopy[0]) {
            return false
        }

        if (served[i] === dineInCopy[0]) {
            dineInCopy.shift()
        }

        if (served[i] === takeOutCopy[0]) {
            takeOutCopy.shift()
        }
    }
    return true
}