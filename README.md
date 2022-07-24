```javascript
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
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log(JSON.stringify(tree.root));

function traverse(node) {
    const tree = {value: node.value};
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}

```

<p>Output</p>

```json
{
  "value": 9,
  "left": {
    "value": 4,
    "left": {
      "value": 1,
      "left": null,
      "right": null
    },
    "right": {
      "value": 6,
      "left": null,
      "right": null
    }
  },
  "right": {
    "value": 20,
    "left": {
      "value": 15,
      "left": null,
      "right": null
    },
    "right": {
      "value": 170,
      "left": null,
      "right": null
    }
  }
}
```