/*
Create a RomanNumerals class that can convert a roman numeral to and from an integer value. 
It should follow the API demonstrated in the examples below. 
Multiple roman numeral values will be tested for each helper method.

Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. 
In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 
                  2008 is written as 2000=MM, 8=VIII; or MMVIII. 
                  1666 uses each Roman symbol in descending order: MDCLXVI.

Input range : 1 <= n < 4000

In this kata 4 should be represented as IV, NOT as IIII (the "watchmaker's four").

Examples
RomanNumerals.toRoman(1000); // should return 'M'
RomanNumerals.fromRoman('M'); // should return 1000
*/

const RomanNumerals = {

    toRoman: function(num) {
        const romanMatrix = [
            [1000, 'M'],
            [900, 'CM'],
            [500, 'D'],
            [400, 'CD'],
            [100, 'C'],
            [90, 'XC'],
            [50, 'L'],
            [40, 'XL'],
            [10, 'X'],
            [9, 'IX'],
            [5, 'V'],
            [4, 'IV'],
            [1, 'I']
        ];

        if (num === 0) {
            return '';
        }
        for (let i = 0; i < romanMatrix.length; i++) {
            if (num >= romanMatrix[i][0]) {
                return romanMatrix[i][1] + RomanNumerals.toRoman(num - romanMatrix[i][0]);
            }
        }
    },

    fromRoman: function(str) {
        const roman = {
            I: 1,
            V: 5, 
            X: 10,
            L: 50, 
            C: 100,
            D: 500,
            M: 1000
        };

        let sum = 0;
        for (let i = 0; i < str.length; i ++) {
            const curr = roman[str[i]];
            const next = roman[str[i + 1]];
            (curr < next) ? (sum -= curr) : (sum += curr)
        }
        return sum;
    }
}
