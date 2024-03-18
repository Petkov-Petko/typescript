
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
