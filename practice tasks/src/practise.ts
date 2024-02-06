// Variable Declarations:
// Declare variables of different types (string, number, boolean) and assign values to them.

let str= "Hello"
let num = 3
let bol = true
 

// Functions:
// Write a function that takes two parameters (numbers) and returns their sum. Add type annotations to the function parameters and return type.

const fun = (a:number, b:number):number => {
    return a + b
}

// Arrays:
// Create an array of strings and write a function to concatenate them into a single string. Use type annotations for the array and function.

const arrayStrings:string[] = ["Petko", "Koko", "Miki"]

const concat = (arr:string[]):string => {
    return arr.join("")
}
// console.log(concat(arrayStrings));

// Objects:
// Define an object representing a person with properties like name, age, and address. Add type annotations to the object properties.

let person : {
    name:string,
    age:number,
    address:string
}

person = {
    name: "Petko",
    age:33,
    address:"Evloogi"
}

// Interfaces:
// Create an interface for a "Car" with properties like make, model, and year. Then create a function that accepts an object conforming to this interface.

interface Car {
    model:string,
    year:number
}

const func2 = (obj:Car):Car => {
    return obj
}

// console.log(func2({
//     model:"Audi",
//     year:2008
// }));


// Union Types:
// Write a function that takes either a string or a number and returns a message based on the type.

const unuonFunc = (input:string | number): string | number | undefined => {
    if(typeof input === "string"){
        return "String" 
    }else if(typeof input === "number"){
        return 1
    }
}

// Enums:
// Create an enum for days of the week. Write a function that takes a day and returns whether it's a weekday or weekend.

enum daysOfWeek {
    monday = "Monday",
    tuesday = "Tuesday",
    friday = "Friday",
    saturday = "Saturday"
}

const funcEnum = (day: daysOfWeek) => {
    if(day === daysOfWeek.saturday){
        return "Its weekend!"
    }else{
        return "Its weekday!"
    }
}
// console.log(funcEnum(daysOfWeek.monday));
// console.log(funcEnum(daysOfWeek.saturday));


// Generics:
// Write a generic function that reverses the elements of an array. Test it with arrays of different types.
  
function reverseArray<Type>(arr: Type[]): Type[] {
    return arr.reverse();
}

// Test with arrays of different types
const stringArray = ["apple", "banana", "orange"];
const numberArray = [1, 2, 3, 4, 5];
const booleanArray = [true, false, true, false];

// console.log(reverseArray(stringArray)); // Output: ["orange", "banana", "apple"]
// console.log(reverseArray(numberArray)); // Output: [5, 4, 3, 2, 1]
// console.log(reverseArray(booleanArray)); // Output: [false, true, false, true]

// Type Assertion:
// Use type assertion to convert a variable of type any to a specific type.

let someValue: any = "Hello, TypeScript!";
let someValueNum: any = 3;
// Type assertion using angle-bracket syntax
let stringLength: number = (<string>someValue).length;
let sqr:number = (someValueNum as number * someValueNum as number)
// Type assertion using 'as' keyword
let alternativeStringLength: number = (someValue as string).length;

console.log(stringLength); // Output: 20
console.log(alternativeStringLength); // Output: 20
console.log(sqr); // 9

