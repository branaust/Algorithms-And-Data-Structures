// QUEUES - collection of data that abides by the FIFO principle - FIRST IN FIRST OUT

class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.length = 0
    }

    enqueue(val) {
        let newNode = newNode(val)
        if (!this.first) {
            this.first = newNode
            this.last = newNode
        } else {
            this.last.next = newNode
            this.last = newNode
        }
        return this.length++
    }

    dequeue() {
        if (!this.first) return null

        let temp = this.first
        if (this.first === this.last) {
            this.last = null
        }
        this.first = this.first.next
        this.length--
        return temp
    }
}
