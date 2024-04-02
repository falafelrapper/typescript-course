"use strict";
let stringArr = ['one', 'hey', 'Zach'];
let drums = ['Tama', 'DW', 1230];
let mixedData = ['EVH', 1984, true];
stringArr[0] = 'Darlene';
stringArr.push('hey');
drums[0] = 1092;
drums.unshift('Jim');
// stringArr = drums cant work since stringArr only contains strings, while drums contains both strings and numbers
drums = stringArr;
mixedData = drums;
let test = [];
let bands = [];
bands.push('Ling Tosite Sigure');
// Tuple
let myTuple = ['Dave', 42, true];
let mixed = ['John', 1, false];
mixed = myTuple;
// myTuple = mixed doesn't work since the target requires three elements, but the source has fewer elements
myTuple[1] = 52;
// Objects
let myObj = {};
myObj = bands;
myObj = {};
const exampleObject = {
    prop1: "Zach",
    prop2: true,
};
exampleObject.prop1 = 'Zach';
let np = {
    name: 'Neil Peart',
    albums: ['Moving Images', 1970]
};
let mg = {
    name: 'Matt Gartska',
    active: true,
    albums: ['I dont remember rn, its 2AM', 123]
};
np = mg;
const greetDrummer = (drummer) => {
    if (drummer.name) {
        return `Hello ${drummer.name.toUpperCase()}!`;
    }
    return 'Hello!';
};
console.log(greetDrummer(np));
// Enums 
// "Unlike most TypeScript features, Enums are not a type-level addition to JavaScript but something added to the language and runtime."
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
console.log(Grade.B);
