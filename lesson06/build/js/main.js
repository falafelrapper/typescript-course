"use strict";
// class Coder {
//     name: string
//     music: string
//     age: number
//     lang: string
//     constructor(
//         name: string,
//         music: string,
//         age: number,
//         lang: string
//     ) {
//         this.name = name
//         this.music = music
//         this.age = age
//         this.lang = lang
//     }
// } this is reduntant
class Coder {
    // by using public, private, and protected we add a visibility modifier that makes your code dry
    // adding the = 'Typescript' or anything else in that makes it so that it's value is optional
    constructor(name, music, age, lang = 'Typescript') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello, I'm ${this.age}`;
    }
}
const Dave = new Coder('Dave', 'Rock', 42);
console.log(Dave.getAge());
// TS wont be happy with these two while getAge does, because those two are protected and private, so you can only access it via the class functions
// They do work and will show, however Typescript doesn't like it
// console.log(Dave.age)
// console.log(Dave.lang)
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        // super() needs to be above any new properties
        // These will carry the properties brought from the class youre extending from
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const Sarah = new WebDev('Mac', 'Sarah', 'Lofi', 25);
console.log(Sarah.getLang());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Page = new Guitarist('Jimmy Page', 'guitar');
console.log(Page.play('strums'));
/////////////////////////////////////////
class Peeps {
    // this makes it so getCount can call on the class directly
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
// static makes it so that it doesnt instantiate
Peeps.count = 0;
const John = new Peeps('John');
const Steve = new Peeps('Steve');
const Amy = new Peeps('Amy');
console.log(Peeps.count);
// the count is kept by everytime the class is instantiated
console.log(Steve.id);
console.log(Amy.id);
console.log(John.id);
////////////////////////////////
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            // return this.dataState = value doesnt work because setters cant return values
            this.dataState = value;
            return;
        }
        else
            throw new Error('Param is not an array of string');
    }
}
const MyBands = new Bands();
MyBands.data = ['Neil Young', 'Led Zep'];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, 'ZZ Top'];
console.log(MyBands.data);
// Doing the below makes it so that your error will show since it cant support numbers
// MyBands.data = ['Van Halen', 5150]
