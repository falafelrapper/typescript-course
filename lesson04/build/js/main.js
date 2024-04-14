"use strict";
// interface postId = stringOrNumber
// types are aliases for any typescript type to assign while interface are more like objects or classes
// Literal Types
let myName;
let userName;
userName = 'Zach';
// literal types with one value is the equivalent of using const
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
// Any function that doesn't return anything should be a void type
logMsg('Hello!');
logMsg(add(2, 3));
// The one below won't work, as the add function needs the two properties to both be numbers
// logMsg(add('a', 3))
let subtract = function (c, d) {
    return c - d;
};
// interface mathFunction {
//     (a: number, b: number): number
// }
let multiply = function (c, d) {
    return c * d;
};
// this is working thhe same way as saying "let multiply = function (c: number, d: number)"
logMsg(multiply(2, 2));
// optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
// When using optional parameters (c?: number), you need a typeguard, such as an if statement like above
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
// now this is doing the same thing as addAll, except now c has a default parameter that means if there isn't a number 
// typed out for c, it will default to 2 instead of "undefined"
logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3));
// Now you can see that the first addAll and the only sumAll is showing the same value, since they both equal 2 + 3 + 2
// after modifying a in sumAll to have a default value of 10, even writing undefined will have it default to 10 now, since we set it up this way
logMsg(sumAll(undefined, 3));
// Rest Parameters
// It is called a rest parameter because it is getting the REST of the parameters (in this case the array)
const total = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
    // .reduce is taking every number value in this array element and reducing it to a accumulated result
};
// The reason we dont need to pass types to prev and curr is because we already state that at the top with ...nums: number[], declaring that nums is an array of numbers
logMsg(total(1, 2, 3, 4));
const createError = (errMsg) => {
    throw new Error(errMsg);
};
// creates a never type, since it is for types that only for errors, which we have set the function to send out
// const infinite = () => {
//     let i: number = 1
//     while(true){
//         i++
//     }
// }
// also creates never type since it never ends. If you are getting never as your type, make sure it's because you need it to error, otherwise it will be endless
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
// Now this one is returning a void since it breaks and becomes undefined due to the break in our function
// custom type guard
const isNumber = (value) => {
    return typeof value === 'number'
        ? true : false;
};
// const numberOrString = (value: number | string): string =>{
//     if(typeof value === 'string') return 'string'
//     if(typeof value === 'number') return 'number'
//     return createError('This should never happen')
// }
// The above function only works when the error is there, otherwise there is no return for undefined, therefore not letting the function work properly
// This is why you need never types as well in certain functions
const numberOrString = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (isNumber(value))
        return 'number';
    return createError('This should never happen');
};
