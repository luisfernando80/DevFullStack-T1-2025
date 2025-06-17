// AULA 19 - 29 DE MAIO DE 2025 - Quinta-Feira

// Árvores Binárias

//********************************* ÁRVORES **********************************
class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinaryTree {
    constructor() {
        this.root = null
    }

    insert(value) {
        let newNode = new Node(value)

        if(this.root == null) {
            this.root = newNode
            return
        }

        this.insertNode(this.root, newNode)
    }

insertNode(currentNode, newNode) {
        if(newNode.value < currentNode.value) {
            if(currentNode.left === null) {
                currentNode.left = newNode
            } else {
                this.insertNode(currentNode.left, newNode)
            }
        } else {
            if(currentNode.right === null) {
                currentNode.right = newNode
            } else {
                this.insertNode(currentNode.right, newNode)
            }
        }
    }

    inorderTraversal(node = this.root) {
        if(node !== null) {
            this.inorderTraversal(node.left)
            console.log(node.value)
            this.inorderTraversal(node.right)
        }
    }

    search(value, node = this.root) {
        if(node === null) return false

        if(value === node.value) return true

        if(value < node.value) {
            return this.search(value, node.left)
        } else{
            return this.search(value, node.right)
        }   
    }

    //---- busca binaria

    function binarySearch(nums, target) {

    let left = 0
    let right = nums.length - 1
    let steps = 0

    while (left <= right) {
        steps += 1
        mid = Math.ceil((left + right) / 2)
        if (nums[mid] > target) {
            right = mid - 1
        } else if (nums[mid] < target) {
            left = mid + 1
        } else {
            console.log('steps: ', steps)
            return mid
        }
    }

    return -1
}

let numbers = [1,3,5,7,9,11,13,15,17,20]

console.log(binarySearch(numbers,7))