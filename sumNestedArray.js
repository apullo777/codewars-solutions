
function sumNestedArray(arr) {
    // To sum all elements in a nested array
      var sum = 0;
      for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
          sum += sumNestedArray(arr[i]);
        } else {
          sum += arr[i];
        }
      }
      return sum;
    }
    
    console.log(sumNestedArray([1, 2, [3, [4, 5], 6], 7]));