// Write a function that takes an integer flightLength (in minutes) and an array of integers movieLengths (in minutes) 
// and returns a boolean indicating whether there are two numbers in movieLengths whose sum equals flightLength.

// When building your function:

// Assume your users will watch exactly two movies
// Don't make your users watch the same movie twice
// Optimize for runtime over memory

let flightLength = 240
let movieLengths = [120, 117, 125, 145, 90, 130, 110]

function checkMovies (flightLength, movieLengths) {
    let seenMovies = {}
    for (let i = 0; i < movieLengths.length; i++) {
        let freeTime = flightLength - movieLengths[i]
        if (seenMovies[freetime]) {
            return true
        }
        seenMovies[movieLengths[i]] = true;
    }
    return false
}


// their solution
function canTwoMoviesFillFlight(movieLengths, flightLength) {

    // Movie lengths we've seen so far
    const movieLengthsSeen = new Set();
  
    for (let i = 0; i < movieLengths.length; i++) {
      const firstMovieLength = movieLengths[i];
  
      const matchingSecondMovieLength = flightLength - firstMovieLength;
      if (movieLengthsSeen.has(matchingSecondMovieLength)) {
        return true;
      }
  
      movieLengthsSeen.add(firstMovieLength);
    }
  
    // We never found a match, so return false
    return false;
  }