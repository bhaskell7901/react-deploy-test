function mergeSortedArrays(arr1, arr2) {
    const mergedArray = [];
    let i = 0;
    let j = 0;
  
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] <= arr2[j]) {
        mergedArray.push(arr1[i]);
        i++;
      } else {
        mergedArray.push(arr2[j]);
        j++;
      }
    }
  
    // Add any remaining elements from arr1
    while (i < arr1.length) {
      mergedArray.push(arr1[i]);
      i++;
    }
  
    // Add any remaining elements from arr2
    while (j < arr2.length) {
      mergedArray.push(arr2[j]);
      j++;
    }
  
    return mergedArray;
  }
  
  // Example usage
  const arr1 = [1, 3, 5, 7, 9];
  const arr2 = [2, 4, 6, 8, 10];
  const mergedArray = mergeSortedArrays(arr1, arr2);
  console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]