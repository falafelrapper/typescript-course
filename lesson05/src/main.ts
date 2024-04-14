type One = string
type Two = string | number
type Three = 'hello'

// convert to more or less specific
let a: One = 'hello'
let b = a as Two // less specific type
let c = a as Three // more specific type

// While Two is a string or number, when you assign b as a as Two, you are now having a go from just a string to also being a string or number when you call b
// for c, it works because you are making a become more specific, changing it from any string, to specifically the string 'hello'

let d = <One>'world'
let e = <string | number>'world'

// let d = <One>'world' is the equivalent to saying let d = 'world' as One
// you cannot use angle brackets however in React Typescript

const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
    if (c === 'add') return a + b
    return '' + a + b
}

let myVal: string = addOrConcat(2, 2, 'concat') as string

// this wont return unless you assert that it is a string, since it knows it can be either a string or number

let nextVal: number = addOrConcat(2, 2, 'concat') as number
// Be careful, typescript sees no problem here, despite the fact that this will return a string when it's a number

// 10 as string
// The above code will get a check, since Typscript still does check type assertions
(10 as unknown) as string
// This is an example of two assertions in a row, otherwise known as type casting (dont recommend since it overrules typescript, avoid when possible)