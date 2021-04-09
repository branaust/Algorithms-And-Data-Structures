// FACTORY PATTERN
function Developer(name) {
    this.name = name
    this.type = 'Developer'
}

function Tester(name) {
    this.name = name
    this.type = 'Tester'
}

function EmployeeFactory() {
    this.create = (name, type) => {
        switch (type) {
            case 1:
                return new Developer(name)
                break
            case 2:
                return new Tester(name)
                break
        }
    }
}

function intro() {
    console.log(`Hey, my name is ${this.name} and I'm a ${this.type}`)
}

const employeeFactory = new EmployeeFactory()
const employees = []

employees.push(employeeFactory.create('Brandon', 1))
employees.push(employeeFactory.create('Kianna', 2))
employees.push(employeeFactory.create('Marc', 1))
employees.push(employeeFactory.create('Olivia', 2))

employees.forEach(emp => {
    intro.call(emp)
})