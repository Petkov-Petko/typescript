
#                        **TypeScript**


## ⚫How to Set Up the ts config File:
First, create the ts config file:   
```
tsc --init
```
You should now have a ```tsconfig.json ```file in the project root.

## ⚫ Компилиране на TypeScript във JavaScript:

С командата във терминала:
```
tsc index.ts => (името на файла ни) 
или
tsc => ще компилира вскички файлове завършващи на ts
```
За автоматично компилиране след всяка промяна във ts файла:
```
tsc -w
```

# **✅Types**
```
JavaScript:                 TypeScript:    

🔴 number                  🔵 any   
🔴 string                  🔵 unknown   
🔴 boolean                 🔵 never   
🔴 null                    🔵 enum   
🔴 undefined               🔵 tuple   
🔴 object                  🔵 union
🔴 symbol
```

**🟣Union type:**  
Поменлива, на която може да бъде присвоен повече от един тип :
```
let age: string | number;
age = 26;
age = '26';
```

**🟣Arrays:**  
В TypeScript можете да определите какъв тип данни може да съдържа един масив:
```
let ids: number[] = [1, 2, 3, 4, 5]; // can only contain numbers
let names: string[] = ['Danny', 'Anna', 'Bazza']; // can only contain strings
let options: boolean[] = [true, false, false]; can only contain true or false
let books: object[] = [
  { name: 'Fooled by randomness', author: 'Nassim Taleb' },
  { name: 'Sapiens', author: 'Yuval Noah Harari' },
]; // can only contain objects
let arr: any[] = ['hello', 1, true]; // any не се препоръчва понеже така губим смислъа от TypeScript.
```
Можем да използваме **union types**, за да дефинирате масиви, съдържащи множество типове:
```
let person: (string | number | boolean)[] = ['Danny', 1, true];
person[0] = 100;
person[1] = {name: 'Danny'} // Error - person array can't contain objects
```

Ако инициализирате променлива със стойност, не е необходимо изрично да посочвате типа, тъй като TypeScript ще го изведе:
```
let person = ['Danny', 1, true]; // This is identical to above example
person[0] = 100;
person[1] = { name: 'Danny' }; // Error - person array can't contain objects
``` 
**🟣Tuples:**    
Typle е масив с фиксиран размер и известни типове данни. 
```
let person: [string, number, boolean] = ['Danny', 1, true];
person[0] = 100; // Error - Value at index 0 can only be a string
```
**🟣Objects:**  
```
let person: {
  name: string;
  location: string;
  isProgrammer: boolean;
};

person.isProgrammer = 'Yes'; // ERROR: should be a boolea

person = {
  name: 'John',
  location: 'US',
};   
// ERROR: missing the isProgrammer property
```

**🟣Interface:**    
Когато дефинираме обект, обикновено ще използваме интерфейс. Това е полезно, ако трябва да проверим дали множество обекти имат едни и същи специфични свойства и типове стойности:

```
interface Person {
  name: string;
  location: string;
  isProgrammer: boolean;
}

let person1: Person = {
  name: 'Danny',
  location: 'UK',
  isProgrammer: true,
};

let person2: Person = {
  name: 'Sarah',
  location: 'Germany',
  isProgrammer: false,
};
```

Можем също да декларираме функции в обекта ни:
```
interface Speech {
  sayHi(name: string): string;
  sayBye: (name: string) => string;
}

let sayStuff: Speech = {
  sayHi: function (name: string) {
    return `Hi ${name}`;
  },
  sayBye: (name: string) => `Bye ${name}`,
};

console.log(sayStuff.sayHi('Heisenberg')); // Hi Heisenberg
console.log(sayStuff.sayBye('Heisenberg')); // Bye Heisenberg
```
**🟣functions:**    
Можем да определим какви типове трябва да бъдат аргументите на функцията, както и вида на връщането на функцията:   
```
function circle(diam: number): string {
  return `The circumference is  + ${Math.PI * diam}`;
}

console.log(circle(10)); // The circumference is 31.41592653589793
```

⚪Можем да добавим въпросителен знак след параметър, за да го направим незадължителен. 
```
const add = (a: number, b: number, c?: number | string) => {
  console.log(c);
  return a + b;
};
```
Ако искаме да декларираме функционална променлива, но не и да я дефинираме, тогава използвайте function signature:
```
// Declare
let sayHello: (name: string) => void;

// Define the function, satisfying its signature
sayHello = (name) => {
  console.log('Hello ' + name);
};

sayHello('Danny'); // Hello Danny
```
**🟣type aliases:**     
Псевдонимите на типове могат да намалят дублирането на кодове, като поддържат нашия код DRY.
```
type StringOrNumber = string | number
let x: StringOrNumber

type PersonObject = {
  name: string;
  id: StringOrNumber;
};

const person1: PersonObject = {
  name: 'John',
  id: 1,
};

const sayHello = (person: PersonObject) => {
  return 'Hi ' + person.name;
};
```

# **✅DOM**
TypeScript няма достъп до DOM като JavaScript. Това означава, че всеки път, когато се опитаме да получим достъп до DOM елементи, TypeScript никога не е сигурен, че те действително съществуват. 

Примерът по-долу показва проблема:
```
const link = document.querySelector('a');

console.log(link.href); // ERROR: Object is possibly 'null'. TypeScript can't be sure the anchor tag exists, as it can't access the DOM
```

**🟣non-null assertion operator (ненулевия оператор) (!)**   
С ненулевия оператор за твърдение (!) можем да кажем изрично на компилатора, че даден израз има стойност, различна от nullили undefined. 
```
// Here we are telling TypeScript that we are certain that this anchor tag exists
const link = document.querySelector('a')!;

console.log(link.href); // www.freeCodeCamp.org
```
