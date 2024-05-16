// Index Sigs

// interface TransactionObj{
//     // An index signature parameter type must be 'string', 'number', 'symbol', or a template literal type.
//     readonly [index: string]: number
// }

interface TransactionObj {
    // provides an index signature, however now it requires the below three properties
    // If you remove Job or add something new that isnt the same type for example in todaysTransactions, it will give an error
    readonly [index: string]: number

    Pizza: number,
    Books: number,
    Job: number
}

const todaysTransactions: TransactionObj = {
    Pizza: -10,
    Books: -5,
    Job: 50
}

console.log(todaysTransactions.Pizza)
console.log(todaysTransactions['Pizza'])

let prop: string = 'Pizza'
console.log(todaysTransactions[prop])

const todaysNet = (transactions: TransactionObj): number => {
    let total = 0
    for (const transaction in transactions) {
        total += transactions[transaction]
    }
    return total
}

console.log(todaysNet(todaysTransactions))

// Can't be changed since it has been set to readonly
// todaysTransactions.Pizza = 40

console.log(todaysTransactions['Dave'])

////////////////////////////////////////////

interface Student {
    // You need to provide undefined if a property is optional for setting the key
    // [key: string]: string | number | number[] | undefined
    name: string,
    GPA: number,
    classes?: number[]
}

const student: Student = {
    name: "Doug",
    GPA: 3.5,
    classes: [100, 200]
};

// console.log(student.test)

// keyof creates a union type that is the specific string literal, allows you to still loop through
for (const key in student) {
    console.log(`${key}: ${student[key as keyof Student]}`)
}

Object.keys(student).map(key => {
    console.log(student[key as keyof typeof student])
})

const logStudentKey = (student: Student, key: keyof Student): void => {
    console.log(`Student ${key}: ${student[key]}`)
}

logStudentKey(student, 'GPA')
logStudentKey(student, 'name')

/////////////////////////////

// interface Incomes {
//     //  An index signature parameter type cannot be a literal type or generic type.
//     [key: string]: number
//     Pizza: string
// }

type Streams = 'salary' | 'bonus' | 'sidehustle'

type Incomes = Record<Streams, number>

const monthlyIncomes: Incomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250
}

for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue as keyof Incomes])
}