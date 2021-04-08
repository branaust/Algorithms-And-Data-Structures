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

    get(index) {
        if (index < 0 || index >= this.length) return null
        let half = this.length / 2
        if (index <= half) {
            let counter = 0
            let current = this.head
            while (counter !== index) {
                current = current.next
                counter++
            }
            return current
        } else {
            let current = this.tail
            let counter = this.length - 1
            while (counter !== index) {
                current = current.prev
                counter--
            }
            return current
        }
    }

    set(index, val) {
        let editNode = this.get(index)
        if (editNode) {
            editNode.val = val
            console.log(editNode)
            return true
        }
        return false
    }

    insert(index, val) {
        if (index < 0 || index >= this.length) return false
        if (index === 0) this.unshift(val)
        if (index === this.length - 1) this.push(val)
        let newNode = new Node(val)
        let nextNode = this.get(index)
        let prevNode = nextNode.prev
        if (nextNode) {
            prevNode.next = newNode
            newNode.prev = prevNode
            newNode.next = nextNode
            nextNode.prev = newNode
            return true
        }
        return null
    }
}

let list = new DoublyLinkedList
list.push('One')
list.push('Two')
list.push('Three')
list.push('Four')
list.push('Five')
list.push('Six')
list.push('Seven')
list.push('Eight')
console.log(list.insert(3, 'Three.5'))