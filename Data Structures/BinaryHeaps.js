// MAX BINARY HEAP - parent nodes are always larger than the child nodes
// MIN BINARY HEAP - parent nodes are always smaller than the child nodes

class MaxBinaryHeap {
    constructor() {
        this.values = []
    }
    insert(element) {
        this.values.push(element)
        let index = this.values.length - 1
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2)
            let swap = this.values[parentIndex]
            if (this.values[index] <= swap) break

            this.values[parentIndex] = this.values[index]
            this.values[index] = swap
            index = parentIndex
        }

        return this.values
    }

}

let newMaxHeap = new MaxBinaryHeap()

newMaxHeap.insert(12)
newMaxHeap.insert(27)
newMaxHeap.insert(33)
newMaxHeap.insert(41)
newMaxHeap.insert(18)
newMaxHeap.insert(39)
console.log(newMaxHeap.insert(55))
