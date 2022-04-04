/*
Complete the solution so that it splits the string into pairs of two characters. 
If the string contains an odd number of characters 
then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']

*/

function solution(str){
   if (str.length % 2 !== 0) {str += "_"}
   let arr= str.split('')
   return chunkArrayInGroups(str.split(''), 2).reduce((a, b)=>a+b)
}

function chunkArrayInGroups(arr, size) {
    let chunked = [];
    for(var i = 0; i < arr.length; i += size) {
      chunked.push(arr.slice(i, i+size));
    }
    return chunked;
  }