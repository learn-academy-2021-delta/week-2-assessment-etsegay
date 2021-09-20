// ASSESSMENT 1: Coding conceptual questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Delta 2021"
 console.log(cohort.split(""))

// a) Your answer:['D', 'e', 'l', 't','a', ' ', '2', '0','2', '1']
// b) Verify and explain:An array of a string each character separtated by a comma  including the space will be
//   printed and this is because each character including the space has an index 


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
 console.log(greeter("LEARN Student"))

// a) Your answer:"undefined"
// b) Verify and explain:it is verified in the console
//the reason is  because the function has no return key word.


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
console.log(multBy2)

// a) Your answer:[ 8, 10, 12, 14, 16 ]
// b) Verify and explain:verified in the terminal and it is true
// because map is a higher order function that applies a certain
//task to each element of an array and returns a new array of equal size
// of the original array


// --------------------4) What will this log?

var oddsOnly = [11, 12, 13, 14, 15].filter(value => value % 2 === 0)
 console.log(oddsOnly)

// a) Your answer:[ 12, 14 ]
// b) Verify and explain:It is verified by running the code in the 
//terminal.This is true because filter applies a certaing task on the 
//the elements of an array that satsify a certain given condition


// --------------------5) What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Delta",
    this.year = 2021
  }
}
var learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer:{ student: 'George', cohort: 'Delta', year: 2021 }
// b) Verify and explain:it is true,because when an object is created the constructor function assigne the 
//the given value to the this keyword.Before the object created the this key word creates an 
//empty object.
