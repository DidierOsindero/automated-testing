"use strict";

/**
 * Find the shortest string in an array.
 * In the case of a tie, returns the earlier string in the array.
 *
 * @param {string[]} stringArr - array of strings
 * @returns {string} - the shortest string
 */
function findShortestString(stringArr) {
  let shortestString = stringArr[0];
  for (let str of stringArr) {
    if (str.length < shortestString.length) {
      shortestString = str;
    }
  }
  return shortestString;
}

//Make this function accessible to test file
module.exports = findShortestString;
