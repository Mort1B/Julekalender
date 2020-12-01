const arr = []

let [min, max] = [Math.min(...arr), Math.max(...arr)];
let out = Array.from(Array(max-min), (v,i) => i + min).filter(i => !arr.includes(i))

// 81273