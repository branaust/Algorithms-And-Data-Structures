class Student {
    constructor(firstName, lastName, grade) {
        this.firstName = firstName
        this.lastName = lastName
        this.grade = grade
        this.tardies = 0
    }
    fullName() {
        return `Your full name is ${this.firstName} ${this.lastName}`
    }
    markLate() {
        this.tardies += 1
        return `${this.firstName} ${this.lastName} has been marked tardie ${this.tardies} times.`
    }
}

let badStudent = new Student('Brandon', 'Austin')
let goodStudent = new Student('Kianna', 'Lamont', 'A')

console.log(badStudent.markLate())
console.log(badStudent.markLate())
console.log(badStudent.markLate())
