function findMatchingPair(collection, sum) {
  if (sum % 2 !== 0) {
    return false;
  }  
  
  let seenNumbers = new Set();
  for (let num of collection) {
    let diff = sum - num;
    if (seenNumbers.has(diff)) {
      return true;
    }
    seenNumbers.add(num);
  }
  return false;
}

let collection = [1, 2, 3, 4, 9];
let sum = 8;
console.log(findMatchingPair(collection, sum)); // Output: false

collection = [1, 2, 3, 4, 4];
sum = 8;
console.log(findMatchingPair(collection, sum)); // Output: true
