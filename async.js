let a = 1 
let b = 2
let c = 3
let d = 4

console.log(a)

setTimeout(() => {
    console.log(b)
}, 2000)

setTimeout(() => {
    console.log(c)
}, 0)

console.log(d)
