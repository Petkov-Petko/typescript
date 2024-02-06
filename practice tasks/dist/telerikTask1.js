"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let input = ["hoopa"];
let gets = this.gets ||
    ((arr, index) => () => arr[index++])(input, 0);
let str = gets().split("");
let resultName = "";
let max = 0;
let counter = 1;
for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i - 1]) {
        counter++;
    }
    else {
        counter = 1;
    }
    if (counter > max) {
        resultName = str[i];
        max = counter;
    }
}
let result = "";
for (let j = 0; j < max; j++) {
    result += resultName;
}
console.log(result);
