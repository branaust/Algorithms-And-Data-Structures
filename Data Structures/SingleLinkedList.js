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
        return this

    }

    get(index) {
        if (index < 0 || index >= this.length) {
            return null
        }
        let counter = 0
        let current = this.head
        while (counter < index) {
            current = current.next
            counter++
        }
        return current
    }

    set(index, val) {
        let node = this.get(index)
        if (node) {
            node.val = val
            return true
        }
        return false
    }
    insert(index, val) {
        if (index < 0 || index > this.length) {
            return false
        }
        if (index === 0) {
            return !!this.unshift(val)
        }
        if (index === this.length) {
            return !!this.push(val)
        }
        let newNode = new Node(val)
        let preNode = this.get(index - 1)
        let postNode = this.get(index)
        if (postNode) {
            preNode.next = newNode
            newNode.next = postNode
            this.length++
            return !!newNode
        }
        return null
    }

    remove(index) {
        if (index < 0 || index > this.length) {
            return false
        }
        if (index === 0) {
            return this.shift()
        }
        if (index === this.length - 1) {
            return !!this.pop()
        }
        let preNode = this.get(index - 1)
        let removed = this.get(index)
        let postNode = this.get(index + 1)
        if (postNode) {
            preNode.next = postNode
            this.length--
            return removed
        }
    }
    reverse() {

        for (let i = 0; i < this.length - 1; i++) {
            let node = this.head
            this.head = this.tail
            this.tail = node
            let prev = null
            let next = null
            for (let i = 0; i < this.length; i++) {
                next = node.next
                node.next = prev
                prev = node
                node = next
            }
            return this
        }
    }
}

let list = new SinglyLinkedList
list.push('HEY')
list.push('Whatsup?')
list.push('Not much you?')
list.push('Not much you?')
list.unshift('AYYAYY')
list.set(1, 'WTF')
console.log(list.insert(2, 'I AM INSERTED NODE'))
console.log(list.get(1))
console.log(list.remove(2))
console.log(list.get(1))
