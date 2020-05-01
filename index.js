// Take out what is unique and pass that in as argument instead. That way we can reuse the map function.
// We can do different work by passing in a different callback function.

function map(array, fcn) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(fcn(array[i]));
  }
  return newArray;
}

function reduce(array, fcn, startingPoint) {
  // If no starting point, want default value to be the first element of array instead of 0 because 0 is falsey and it causes accum to return false
  let accum = array[0];
  // Then start iterating from the second element
  let i = 1;

  // If there is a starting point, set accumulator to that value
  if (startingPoint) {
    accum = startingPoint;
    // And start iterating from the first element of array
    i = 0;
  }

  // Have to leave semicolon there even if we take the initializer out
  for (; i < array.length; i++) {
    accum = fcn(array[i], accum);
  }

  return accum;
}

// array.reduce(function (accum, element) {
//   return accum + element;
// }, 0);
