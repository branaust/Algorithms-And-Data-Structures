// MAX BINARY HEAP - parent nodes are always larger than the child nodes
// MIN BINARY HEAP - parent nodes are always smaller than the child nodes

class MaxBinaryHeap {
    constructor() {
        this.values = []
    }
    insert(value) {
        this.values.push(value)
        let index = this.values.length - 1
        let parentIndex = Math.floor((index - 1) / 2)

        while (this.values[parentIndex] < this.values[index]) {
            let swap = this.values[parentIndex]
            this.values[parentIndex] = this.values[index]
            this.values[index] = swap
            index = parentIndex
        }

        return this.values
    }

}

let newMaxHeap = new MaxBinaryHeap()

newMaxHeap.insert(4)
newMaxHeap.insert(12)
newMaxHeap.insert(27)
newMaxHeap.insert(3)
newMaxHeap.insert(18)
newMaxHeap.insert(6)
console.log(newMaxHeap.insert(22))
console.log(newMaxHeap.insert(9))