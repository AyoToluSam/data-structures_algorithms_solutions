// Binary Search Tree

class Node {
    constructor(data, left=null, right=null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    add(data) {
        const rootNode = this.root
        if (rootNode === null) {
           return this.root = new Node(data);
        } else {
            const searchTree = (rootNode) => {
                if ( data < rootNode.data ) {
                    if ( rootNode.left === null) {
                       return rootNode.left = new Node(data);
                    } else {
                        return searchTree(rootNode.left);
                    }
                } else if ( data > rootNode.data ) {
                    if ( rootNode.right === null) {
                       return rootNode.right = new Node(data);
                    } else {
                        return searchTree(rootNode.right);
                    } 
                } else {
                    return null;
                }
            }
        }

    }

    findMin() {
        let current = this.root;
        while (current.left !== null) {
            current = current.left;
        }
        return current.data;
    }
    
    findMax() {
        let current = this.root;
        while (current.right !== null) {
            current = current.right;
        }
        return current.data;
    }

    find(data) {
        let current = this.root;
        while (data !== current.data) {
            if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }

            if (current === null) {
                return null;
            }
        }
        return current;
    }

    isPresent(data) {
        let current = this.root;
        while (current !== null) {
            if (current == data) {
                return true;
            }
            else if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }

    remove(data) {
        const removeNode = (node, data) => {
            if (node == null) {
                return null;
            }
            if (data == node.data) {
                if (node.left == null && node.right == null) {
                    return null;
                }
                if (node.left == null) {
                    return node.right;
                }
                if (node.right == null) {
                    return node.left;
                }

                // if the node has two children, you have to replace it with
                // the smallest of all the children that have a bigger value than the node.
                // This can be achieved by selecting the first child on the right subtree(all children to the right are always bigger than their parent node)
                // and then selecting the left-most child of that right subtree, which would be the smallest value in the subtree.

                let tempNode = node.right;
                while (node.left !== null) {
                    tempNode = tempNode.left
                }
                node.data = tempNode.data;
                //The data in the current node which is the node that matches the data to be deleted, has been updated to the value of the left-most subnode
                //However, that left-most subnode still has to be set to null to correct the tree structure.
                node.right = removeNode(node.right, tempNode.data);
                return node;
            } else if (data < node.data) {
                node.left = removeNode(node.left, data); 
                return node;
            } else {
                node.right = removeNode(node.right, data);
                return node;
            }
        }
        this.root = removeNode(this.root, data);
    }

}