// const calculateAgeInDogYears = (age) => {
//     const ageInDogYears = age/7
//     return ageInDogYears
// }

// // const dogYears = calculateAgeInDogYears(22)
// console.log(calculateAgeInDogYears(35))

// const dogBreed = (breed) => {
//     if (breed==="meow") {
//         console.log ("I like cats")
//     } else {
//     console.log (`my favorite dog breed is ${breed}`)
// }
// }

// dogBreed(mutt)

// // myFavorite = dogBreed("mutt")

// // console.log(`When it comes to pets, ${myFavorite}!`)



// const add = (x,y,z) => {return (x + y + z)}

// console.log(add(17,4,11))



// CARS

// const go = (direction, speed) => {
//     if (speed > 75) {
//         return(`The car is moving ${direction} at ${speed} mph. SLOW DOWN!`)
//     } else {
//         return(`The car is moving ${direction} at ${speed} mph.`)}
//     }
// let car = go ("circles", 75)
// console.log(car)




// const evenOrOdd = (number) => {
//     if (number % 2 === 0) {
//         return ("even")
//     } else {
//         return ("odd")
//     }
// }
// console.log(evenOrOdd(0))

// const arrayOfNumbers = [2, 5, 4, 7, 10]

// for (number of arrayOfNumbers) {
//     console.log(evenOrOdd(number))
// }

// // for (var i=0; i<arrayOfNumbers.length, i++) {
// //     console.log(evenOrOdd(i))
// // }


//VERSION 1 OF DOUBLE FUNCTION//

// const words = ["The", "killing", "complex", "houses",
// "married", "kittens", "and", "single",
// "soldiers", "and", "their", "kleptomaniacal",
// "families"]

// for (word of words) {
//     if (word.charAt(0) === "k") {
//         const kWordIndex = words.indexOf(word)
//         words.splice(kWordIndex, 1)
//     }
// }
// console.log(words.join(" "))


//VERSION 2 OF DOUBLE FUNCTION

// const words = ["The", "killing", "complex", "houses",
// "married", "kittens", "and", "single",
// "soldiers", "and", "their", "kleptomaniacal",
// "families"]

// for (word of words) {
//     if (word.startsWith("k") === true) {
//         const kWordIndex = words.indexOf(word)
//         words.splice(kWordIndex, 1)
//     }
// }
// const combineWords = (anyArray) => {
//     return anyArray.join(" ")
// }
// const newSentence = combineWords(words)
// console.log (newSentence)



// const tunaChance = Math.random() * 100

// const tunaTime = () => {
//     if (tunaChance <= 33) {
//         console.log ("Sven hooked a tuna! :)")
//     } else {
//         console.log ("Sven came up empty-handed :(")
//     }
// }
// tunaTime()

// const lunchBag = {
//     sandwich: "Slammer",
//     side: "wedges",
//     drink: "pepper",
//     dessert: "cake"
// }

// console.log (lunchBag)

// const changeLunch = (sandwich1, side1, drink1, dessert1) => {
//     lunchBag.sandwich = sandwich1,
//     lunchBag.side = side1,
//     lunchBag.drink = drink1,
//     lunchBag.dessert =dessert1
//     return lunchBag
// }

// changeLunch("burger", "tots", "beer", "ice cream")

// console.log (lunchBag)

 //SAME CHORES, DIFFERENT DAYS


// const twice = number => number * 2
// const timesFive = number => number * 5
// const square = number => number * number

// const bigify = (number, operationFunction) => {
//     const result = operationFunction(number)
//     return result
// }

// console.log (bigify (10, timesFive))






const worker = {
    firstName: "Tom",
    lastName: "Cruise",
}

//Random function to change the worker.
const changeWorker = (firstName, lastName) => {
    worker.firstName = firstName
    worker.lastName = lastName
}

//This formats the name.
const fullName = (person) => {
    return (`${person.firstName} ${person.lastName}`)
}

//test run for Tom Cruise
console.log (fullName(worker))

// changeWorker("Bob", "Saget")

// console.log (fullName(worker))

//THESE ARE ALL THE ONES WITH PARAMETERS

const cook = (workPerson) => `${workPerson} cooks turkeys`
const clean = (workPerson) => `${workPerson} cleans the kitchen`
const fixCar = (workPerson) => `${workPerson} fixes the car`
const gardens = (workPerson) => `${workPerson} waters the flowers`
const takeTrash = (workPerson) => `${workPerson} takes out the trash`
const cleanToilet = (workPerson) => `${workPerson} cleans the toilet`

// console.log(cook(fullName(worker)))
// console.log(clean(fullName(worker)))
// console.log(fixCar(fullName(worker)))


// PART TWO

// THESE ARE NOT REALLY FUNCTIONS BUT I TRIED IT OUT THIS WAY TO AVOID REPEATING NAMES

// const cook = `cooks turkeys`
// const clean = `cleans the kitchen`
// const fixCar = `fixes the car`
// const gardens =  `waters the flowers`
// const takeTrash = `takes out the trash`
// const cleanToilet = `cleans the toilet`

const dayPlanner = (chore, chore2, chore3, person, day) => `On ${day}, ${chore(person)}, ${chore2(person)}, and ${chore3(person)}.`

// WITHOUT REPETITION
// const dayPlanner = (chore, chore2, chore3, person, day) => `On ${day}, ${person} ${chore}, ${chore2}, and ${chore}.`

let dude = fullName(worker)

let plan = dayPlanner(clean, fixCar, gardens, dude, "Tuesday")

console.log(plan)

changeWorker("Bob", "Saget")
dude = fullName(worker)

plan = dayPlanner(takeTrash, cleanToilet, cook, dude, "Friday")

console.log(plan)



// 