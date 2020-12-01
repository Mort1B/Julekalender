// Find the missing number in a random list of numbers between 1 and 100.000.

const arr = [] // Array was copied from the calendar

//  min and max of the array
let [min, max] = [Math.min(...arr), Math.max(...arr)];

// Counts through the array and filters out the number missing from the list
let out = Array.from(Array(max-min), (v,i) => i + min).filter(i => !arr.includes(i))

// 81273