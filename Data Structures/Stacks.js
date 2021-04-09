// Stacks - collection of data that abides by the LIFO principle - LAST IN FIRST OUT

class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val) {
        let newNode = new Node(val)
        if (!this.first) {
            this.first = newNode
            this.last = newNode
        } else {
            let next = this.first
            this.first = newNode
            newNode.next = next
        }
        this.size++
        return this
    }
    pop() {
        if (!this.first) {
            return undefined
        }
        else if (this.first === this.last) {
            this.last = null
        }
        else {
            this.first = this.first.next;
            this.size--
            return this
        }
    }
}

const stack = new Stack()

console.log(stack.push('One'))
console.log(stack.push('Two'))
console.log(stack.push('Three'))
console.log(stack.push('Four'))
console.log(stack.push('Five'))

console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())