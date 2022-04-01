/* 
Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
The first word within the output should be capitalized only if the original word was capitalized 
(known as Upper Camel Case, also often referred to as Pascal case).

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
*/


function toCamelCase(str){
    let re = /[^a-zA-Z0-9]/g;
    let string = str.replace(re, "_").split("_")
                    .reduce(
                        (a, b) => a + capitalize(b.toLowerCase())
                    ) 
    return string
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}