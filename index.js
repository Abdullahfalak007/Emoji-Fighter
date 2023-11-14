// Create a person object that contains three keys: name, age, and county.
// Use yourself as an example to set the values for name, age, and country

// Create a function, logData(), that uses the person object to create a
// string in the following format: 
// "Per is 35 years old and lives in Norway"

// // Call the logData() function to verify that it works

// person = {
//     name: "Abdullah Falak",
//     age: 25,
//     country: "Pakistan"
    
// }

// function logData() {
//     console.log(person.name + " is " + person.age + " years old and live in " + person.country)
// }

// logData()

//----------------------------------------------------------------------------------------------------
// let largeCountries = ["China","India","USA","Indonesia","Pakistan"]

// console.log("Five largest countries in the world are: ")
// for (let index = 0; index < largeCountries.length; index++) {
//     console.log(largeCountries[index]+ "\n")
    
// }

//----------------------------------------------------------------------------------------------------
let largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]

// You need to help me fixup the largeCountries array so that 
// China and Pakistan are added back into their respective places

// Use push() & pop() and their counterparts unshift() & shift()
// Google how to use unshift() and shift()

// console.log(largeCountries)
// largeCountries.pop()
// console.log(largeCountries)
// largeCountries.push("Pakistan")
// console.log(largeCountries)
// largeCountries.shift()
// console.log(largeCountries)
// largeCountries.unshift("China")
// console.log(largeCountries)

// let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array

// function randomItem() {
//     let limiter = Math.floor((Math.random()*3))

//     console.log(hands[limiter])
// }

// randomItem()
//---------------------------------------------------------------------
let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    // Challenge:
    // When the user clicks on the "Pick Fighters" button, pick two random 
    // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
    let randomindex1 = Math.floor(Math.random()*16)
    let randomindex2 = Math.floor(Math.random()*16)
    stageEl.textContent = fighters[randomindex1] + " VS " + fighters[randomindex2]
})
