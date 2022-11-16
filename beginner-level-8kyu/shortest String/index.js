let arr = ["aaaaaa", "aaa", "a", "aaaaaaaaaaa", "aaaaaaa"];

console.log(arr.reduce((a, b) => a.length <= b.length ? a : b));

// 'a' will be the previousValue and 'b' will be the current value if the previous value doesnt have more length than the current value, the previous still be smallest value. 