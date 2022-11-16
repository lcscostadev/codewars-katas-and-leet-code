let str = "Hello guys welcome to my github";
let firstLetters = str.split(/\s/).reduce((response, word) => response += word.slice(0, 1), '');


console.log(firstLetters);

// we are using here a regeX (Regular Expression) \s - matches any whitespace