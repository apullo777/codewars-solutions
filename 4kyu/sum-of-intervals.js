/* 
Write a function called sumIntervals/sum_intervals() that accepts an array of intervals, 
and returns the sum of all the interval lengths. Overlapping intervals should only be counted once.

Intervals
Intervals are represented by a pair of integers in the form of an array. 
The first value of the interval will always be less than the second value. 
Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.

Overlapping Intervals
List containing overlapping intervals:

[
   [1,4],
   [7, 10],
   [3, 5]
]
The sum of the lengths of these intervals is 7. Since [1, 4] and [3, 5] overlap, 
we can treat the interval as [1, 5], which has a length of 4.

Examples:
sumIntervals( [
   [1,2],
   [6, 10],
   [11, 15]
] ); // => 9

sumIntervals( [
   [1,4],
   [7, 10],
   [3, 5]
] ); // => 7

sumIntervals( [
   [1,5],
   [10, 20],
   [1, 6],
   [16, 19],
   [5, 11]
] ); // => 19
*/


// First attempt

function sumIntervals(intervals) {
    var numbers = {};
    intervals.forEach(([a, b]) => { // 0(n)
        for (let i = a; i < b; i++) {  // 0(n)
            numbers[i] = i;
      }
    });
    return Object.keys(numbers).length;
} // 0(n^2)



// Second attempt

function sumIntervals(intervals){
    sorted = intervals.sort(function(a, b) { // O(n)
      return a[0] - b[0];
    });
    reduced = sorted.reduce(function(acc, el, index, array) { // O(n)
        const previous = array[index - 1];
        if (array.length > 1 && previous !== undefined) {
            if (el[0] < acc[acc.length - 1]) {
                if (el[1] >= acc[acc.length - 1]) {
                    acc[acc.length - 1] = el[1];
                }
            } else {
                acc.push(...el);
            }
        } else {
            acc.push(...el);
        }
        return acc;
    }, []);
    let result = 0;
    for (let i = 0; i < reduced.length - 1 ; i+=2) { // O(2n)
        result+=(reduced[i + 1] - reduced[i]);
    }
    return result;
} // O(n)

