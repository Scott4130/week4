// let whichGreeting = (timeOfDay) => {
//     console.log(`good ${timeOfDay}`)
// }

// let greet = (time, fn) => {
//     if (time < 12){
//         fn ("morning")
//     } else if (time > 12 && time <18){
//         fn ("Afternoon")
//     } else("Evening")
// }

// greet(14, whichGreeting)
// returns good afternoon




console.log("Hello CodeNation");


//    1 part 2 

let greetCodenation = () => console.log("Hello CodeNation")

let printsFiveTimes = (callback) => {
    for (let i = 0; i < 5; i++) {
        callback()
    }
}
printsFiveTimes(greetCodenation)


// --------------------------

const multiply = (a,b) => {
    return a*b
}

const add = (a,b) => {
    return a+b
}

const divide = (a,b) => {
    return a+b
}

const subtract = (a,b) => {
    return a+b
}

const doMath = (num1) => {
    return (num2, fn) => {
        return fn(num1, num2)
    }
}