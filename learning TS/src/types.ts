//// TYPESCRIPT AUTOMATICALLY ASSIGNS A TYPE WHEN YOU DEFINE A VARIABLE
let variable = "hello";

variable = "hi";

let age = 18;

// age="eighteen"

//// EXPLICITLY PROVIDING A TYPE
let ageWithType: number = 22;

// ageWithType ="eighteen"
ageWithType = 18;

//// BASIC TYPES
let testString: string;

testString = "hello";

let testBoolean: boolean;

testBoolean = false;

//// MULTIPLE TYPES (UNION TYPES)
let testStringOrNumber: string | number;

testStringOrNumber = 10;
testStringOrNumber = "10";
// testStringOrNumber = []

//// ARRAYS
let names = ["john", "jane", "tom"];

// names.push(3)
names.push("mike");

let numbers = [11, 22, 35];

// numbers.push(true)
numbers.push(92);

let testStringArray: string[];

// testStringArray = [1,2,3]
testStringArray = ["one", "two", "three"];

let testNumberArray: number[];

// testNumberArray = [true, "hi", 23]
testNumberArray = [12, 55, 23];

let testStringOrNumberArray: (string | number)[];

testStringOrNumberArray = [1, "two", 3];


//OBJECTS

let user = {
    name:"Petko",
    age: 25,
    isAdmin:false
}

user.name = "jane";
// user.age = "test"

// user.phone = "+35989213123"


let userObject : {
    username:string,
    age:number,
    isAdmin:boolean
}

// userObject = {
//     username: "petko",
//     age:25
// }
// Трябва да добавя вскички стойности или да го направя isAdmin?.


//FUNCTIONS
//void function
let sayHi = () => {
    console.log("Hi");
}

let funcReturnString = ():string => {
    return "Hey"
}


//TYPE ALIASES

type UserType = {
    username:string,
    age:number,
    phone?:string
}

let functionTest = (user:UserType)=>{
    console.log(user.phone);
    
}


// INTERFACES

interface PetkoUser {
    username:string,
    email:string,
    age:number
}

interface MoreUsers extends PetkoUser {
    newUserId:number
}

const more : MoreUsers = {
    username:"Koko",
    email:"koko@gamil.com",
    age:23,
    newUserId:1
}
// Trqbva da polzwa vsichko ot PetkoUser i MoreUsers.



// GENERICS

interface IAuthor {
    id:number,
    name:string
}

interface ICategory{
    id:number,
    title:string
}

interface Ipost {
    id:number,
    title:string,
    desc:string,
    extra: IAuthor[] | ICategory[];
}

// OBJECTS combining

type cardNumber = {
    cardNumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}

// TUPLE

let userNew: [string, number, boolean];

userNew = ["Petko", 5, true];
// sus tuple mojem da podredim tipovete.


// ENUM

enum SeatChoice {
    DOOR = 5,
    MIDDLE = 15,
    WINDOW = 33,
}

const mySeat = SeatChoice.WINDOW

// UNTERFACES  
// KAto types no moejem da dobavqme funkcii

interface User {
    readonly Id: number,
    email: string
    userId: number
    startTrial: (name: string) => string
}

// Можем да добаваме още параметри без да бутаме главния User.
interface User {
    githubId: string
}

//Копираме User и со добавяме каквто искаме
interface Admin extends User {
    isAdmin: boolean
}



const petko: User = {
    Id: 22,
    email: "Petrko.com",
    userId: 335,
    startTrial: (name = "petko") => {
        return "Okey"
    },
    githubId: "petkov"
}

const me: Admin = {
    Id: 22,
    email: "Petrko.com",
    userId: 335,
    startTrial: (name = "petko") => {
        return "Okey"
    },
    githubId: "petkov",
    isAdmin: false
}


// Pick and Omit (Копират пропертита на обект. Със Pick избираме кой пропертита да бъдат в новия обект а със Omit кой да ги няма)

interface User {
    id: string;
    firstName: string;
    lastName:string;
}

type names = Pick<User, "firstName" | "lastName">; // {firstName: string, lastName: string};

type idOnly = Omit<User, "firstName" | "lastName"> // {id:string};