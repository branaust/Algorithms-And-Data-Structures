class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        }
        else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }

    pop() {
        if (!this.head) return undefined
        let current = this.head
        let newTail = current
        while (current.next) {
            newTail = current
            current = current.next
        }
        this.tail = newTail
        this.tail.next = null
        this.length--
        if (this.length === 0) {
            this.head = null
            this.tail = null
        }
        return current
    }

    shift() {
        if (!this.head) return undefined
        let oldHead = this.head
        this.head = oldHead.next
        this.length--;
        if (this.length === 0) {
            this.tail = null
        }
        return oldHead
    }

    unshift(val) {
        let newNode = new Node(val);
        let oldHead = this.head
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        }
        else {
            this.head = newNode
            newNode.next = oldHead
        }
        this.length++
        return newNode

    }
}

let list = new SinglyLinkedList
list.push('HEY')
list.push('Whatsup?')
list.push('Not much you?')
list.push('Not much you?')
list.unshift('AYYAYY')
console.log(list)