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

// The DOM
const img = document.querySelector('img')!

// inferred it is an HTMLImageElement

const myImg = document.getElementById('#img') as HTMLImageElement

// must assert as HTMLImageElement since ids cannot read the file type immediately and will have the option to be null

// inferred as an HTMLElement

img.src

// typescript is okay with this since we specified the assertion above by stating its an HTMLImageElement at the end (previously it didn't include this), now we can reference img.src since it knows it will be an HTMLImageElement

myImg.src

// adding the ! at the end of img asserts it as a 'non-null' assertion

const nextImg = <HTMLImageElement>document.getElementById('#img')
// another typecast, again this cant be used in React TS

