class Node {
    constructor(val) {
        this.val = val
        this.next = null
        this.prev = null
    }

}

class DoublyLinkedList {

    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val) {
        let newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        }
        else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length++
        return this
    }

    pop() {
        let oldTail = this.tail
        if (!this.head) return undefined
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.tail = oldTail.prev
            this.tail.next = null
            oldTail.prev = null
        }
        this.length--
        return oldTail
    }

    shift() {
        let oldHead = this.head
        if (!this.head) return undefined
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.head = oldHead.next
            this.head.prev = null
            oldHead.next = null
        }
        this.length--
        return oldHead
    }

    unshift(val) {
        let newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        }
        else {
            newNode.next = this.head
            this.head = newNode
            newNode.next.prev = newNode
        }
        this.length++
        return this
    }
}

let list = new DoublyLinkedList
list.push('HELLO MATZ')
list.push('Is this thing on?')
console.log(list.unshift('SHOULD BE NUM 1'))
console.log(list.head.next)