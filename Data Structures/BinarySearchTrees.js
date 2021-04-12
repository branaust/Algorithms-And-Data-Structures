// TREE - A tree is a data structure that consists of nodes in a Parent/Child relationship

// ROOT - The top node in a tree
// CHILD - A node directly connected to another node when moving away from the Root
// Parent - The converse notion of a Child
// Siblings - A group of nodes with the same Parent
// Leaf - A node with no Children
// Edge - The connection between one node and another

// BINARY SEARCH TREE: 
// - Every parent node has at most two children
// - Every node to the left of a parent node is always less than the parent
// - Every node to the right of a parent node is always greater than the parent

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
        } else {
            let current = this.root
            while (true) {
                if (value < current.value) {
                    if (current.left === null) {
                        current.left = newNode
                        return this
                    } else {
                        current = current.left
                    }
                } else if (value > current.value) {
                    if (current.right === null) {
                        current.right = newNode
                        return this
                    } else {
                        current = current.right
                    }

                }
            }

        }
    }
}

let tree = new BinarySearchTree()
tree.insert(15)
tree.insert(12)
tree.insert(18)
tree.insert(14)
tree.insert(9)
tree.insert(16)
tree.insert(24)
tree.insert(4)
tree.insert(10)
console.log(tree.root)
