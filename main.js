class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const node = new Node(value);
        if (this.root == null) {
            this.root = node;
        } else {
            let currentNode = this.root;
            while (true) {
                //Left
                if (currentNode.value > value) {
                    if (!currentNode.left) {
                        currentNode.left = node;
                        return this;
                    }
                    currentNode = currentNode.left;
                } else {
                    //Right
                    if (currentNode.value < value) {
                        if (!currentNode.right) {
                            currentNode.right = node;
                            return this;
                        }
                        currentNode = currentNode.right;
                    }
                }
            }
        }
    }

    lookup(value) {
        if (!this.root) {
            return false;
        }

        let currentNode = this.root;
        while (currentNode) {
            if (currentNode.value > value) {
                currentNode = currentNode.left;
            } else if (currentNode.value < value) {
                currentNode = currentNode.right;
            } else if (currentNode.value === value) {
                return currentNode;
            }
        }

        return false;
    }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log(tree.lookup(20));