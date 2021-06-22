class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    greeting() {
        console.log(`Hello ${this.firstName} ${this.lastName}`)
    }
}

module.exports = {
    Person   
}