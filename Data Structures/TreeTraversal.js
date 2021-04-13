// BREADTH FIRST SEARCH - Traversing Horizontally

class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(value) {
        const newNode = new Node(value)
        if (!this.root) {
            this.root = newNode
            return this
        }
        let current = this.root
        while (true) {
            if (value < current.value) {
                if (current.left === null) {
                    current.left = newNode
                    return this
                }
                current = current.left
            } else if (value > current.value) {
                if (current.right === null) {
                    current.right = newNode
                    return this
                }
                current = current.right
            } else if (value === current.value) return undefined
        }

    }

    find(value) {
        if (!this.root) return undefined
        let current = this.root
        while (true) {
            if (value === current.value) return true
            if (value < current.value) {
                if (!current.left) return false
                current = current.left
            } else if (value > current.value) {
                if (!current.right) return false
                current = current.right
            }
        }
    }

    BFS() {
        let data = []
        let queue = []
        let node = this.root
        queue.push(node)

        while (queue.length) {
            node = queue.shift()
            data.push(node.value)
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
        return data
    }

    preOrder() {
        let data = []
        const traverse = (node) => {
            data.push(node.value)
            node.left && traverse(node.left)
            node.right && traverse(node.right)
        }
        traverse(this.root)
        return data
    }

    postOrder() {
        let data = []
        const traverse = (node) => {
            node.left && traverse(node.left)
            node.right && traverse(node.right)
            data.push(node.value)
        }
        traverse(this.root)
        return data
    }

    inOrder() {
        let data = []
        const traverse = (node) => {
            node.left && traverse(node.left)
            data.push(node.value)
            node.right && traverse(node.right)
        }
        traverse(this.root)
        return data
    }
}


let tree = new BinarySearchTree()
tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)

console.log(tree.preOrder())
console.log(tree.postOrder())
console.log(tree.inOrder())