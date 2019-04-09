// This version does not go through the entire array unnecessarily, but still needs optimising.

var sum_pairs = function(ints, s) {
  console.log(ints);
  var results = [];
  var indices = [];
  var highIndex = 0;
  for (var i = 0; i < ints.length; i++) {
    for (var j = i + 1; j < ints.length; j++) {
      if (ints[j] + ints[i] == s) {
        results.push(ints[i]);
        indices.push(i);
        results.push(ints[j]);
        indices.push(j);
        highIndex += j;
      }
    } if (results.length == 2) {
      break;
    }
  }
  for (var i = 0; i < highIndex; i++) {
    for (var j = i + 1; j < highIndex; j++) {
      if (ints[j] + ints[i] == s) {
        results.push(ints[i]);
        indices.push(i);
        results.push(ints[j]);
        indices.push(j);
      }
    }
  }
  console.log(results);
  console.log(indices);
  var largestIndicesInPairs = [];
  for (var k = 0; k < indices.length; k++) {
    if (k % 2 == 1) {
      if (indices[k] > indices[k-1]) {
        largestIndicesInPairs.push(indices[k]);
      } else {
        largestIndicesInPairs.push(indices[k-1]);
      }
    }
  }
  largestIndicesInPairs.sort((a, b) => a - b);
  var largerIndex = largestIndicesInPairs[0];
  var results2 = [];
  if (ints[largerIndex] == undefined) {
    return undefined;
  }
  results2.push(s - ints[largerIndex]);
  results2.push(ints[largerIndex]);
  return results2;
}

sum_pairs([1, 2, 6, 4, 8, 7, 3, 15], 8);
