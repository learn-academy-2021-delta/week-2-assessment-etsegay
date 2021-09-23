// ASSESSMENT 2: Coding practical questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes a number as an argument
// and decides if the number is evenly divisble by three or not.
/*
Algorithm check a given number if divissible by 3
Input-->given number
output-->check a number if divisible by three
if number divisible by 3 and its remainder is zero
return true
*/

// a) Create a test with expect statements for each of the variables provided.
describe("checkMultipleOf", ()=>{
    test("returns num1  divisible by three", () =>{
        expect(checkMultipleOf(15)).toEqual(`15 is divisible by 3`)
    })
    test("returns num1  divisible by three", () =>{
        expect(checkMultipleOf(0)).toEqual(`0 is divisible by 3`)
    })
    test("returns num1 is divisible by three", () =>{
        expect(checkMultipleOf(-7)).toEqual(`-7 is not divisible by 3`)
    })
})
 //var num1 = 15
// Expected output: "15 is divisible by three"
//var num2 = 0
// Expected output: "0 is divisible by three"
//var num3 = -7
// Expected output: "-7 is not divisible by three"

// b) Create the function that makes the test pass.
let checkMultipleOf=(num1)=>{
    if(num1%3===0){
        return `${num1} is divisible by 3`
    }return `${num1} is not divisible by 3`
}



 // --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.
/*
Algorithm return an array elements capitalized their first letter
    Input-->an array of words all in small letter
    output --each word cappitalized their first letter
        split the array
        use for loop
        convert first letter of each element to uppercase
*/
 // a) Create a test with expect statements for each of the variables provided.

 var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
 // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
 var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
 // Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]
describe(" convert first letter of an element in an array to upper case", ()=>{
    test("returns an array of words each first letter cappitalized", () =>{
        expect(upper(["streetlamp", "potato", "teeth", "conclusion", "nephew"]))
        .toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
    })
    test("returns an array of words each first letter cappitalized", () =>{
        expect(upper(["temperature", "database", "chopsticks", "mango", "deduction"]))
        .toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
    })  
 })
// b) Create the function that makes the test pass.
let upper=(array1)=>{
return array1.map((x)=> x[0].toUpperCase()+x.substring(1))
}



// --------------------3) Create a function that takes in a string and logs the index of the first vowel.


// a) Create a test with expect statements for each of the variables provided.

// var vowelTester1 = "learn"
// // Expected output: 1
// var vowelTester2 = "academy"
// // Expected output: 0
// var vowelTester3 = "challenges"
// // Expected output: 2
/*
Algorithm find the index of the first vawel in a string
    input-->string
    output -->index of the first vawel in a given string
        convert given string to lower case
        use for loop 
        check if a given string inclues the vawels(a,e,i,o,u)
        if string does not inclued vawels return ,string has no vawels
        else if string contain vawels return the index of the first vawel
*/
describe("determine if a string has a vawel",()=>{
    test("returns the index of the first index of a vawel in a string",()=>{
        expect(vawel("learn")).toEqual(1)
    })
    test("returns the index of the first index of a vawel in a string",()=>{
        expect(vawel("academy")).toEqual(0)
    })
    test("returns the index of the first index of a vawel in a string",()=>{
        expect(vawel("challenges")).toEqual(2)
    })
    test("returns the index of the first index of a vawel in a string",()=>{
        expect(vawel("try")).toEqual("The string has no vawel")
    })
})

// b) Create the function that makes the test pass.

let vawel=(str)=>{
    let copy=str.toLowerCase()
    for(let i=0;i<copy.length;i++){
        if(!copy.includes('e')&& !copy.includes('a')&& !copy.includes('u') && !copy.includes('i')&&!copy.includes('o')){
           return "The string has no vawel"
        } 
        else if(copy.charAt(i)==='e'||copy.charAt(i)==='a'||copy.charAt(i)==='u'||copy.charAt(i)==='i'||copy.charAt(i)==='e'||copy.charAt(i)==='o'){
          return i  
        }
    }
}
