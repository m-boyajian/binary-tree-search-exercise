class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    const newNode = new Node(val);

    if (!this.root) {
      // If root is empty, the new node becomes the root
      this.root = newNode; 
      return this;
    }

    let current = this.root;

    while(true) {
      if(val === current.val) {
        // If val already exists
        return this;
      }
      if(val < current.val) {
        if(!current.left) {
          // Insert left child if left is null
          current.left = newNode;
          return this;
        }
        // Otherwise, if left child is not null, move val to the left child
        current = current.left;
      } else {
        if(!current.right) {
          // Insert right child if right is null
          current.right = newNode;
          return this;
        }
        // Otherwise, if right child is not null, move val to the right child
        current = current.right;
      }
    }

  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, current = this.root) {
    // Handle the case when the tree is initially empty
    if (current === null) {
        this.root = new Node(val);
        return this;
    }

    // Recursive insertion
    if (val < current.val) {
        if (current.left === null) {
            current.left = new Node(val);
        } else {
            this.insertRecursively(val, current.left);
        }
    } else { // Handle insertion into the right subtree
        if (current.right === null) {
            current.right = new Node(val);
        } else {
            this.insertRecursively(val, current.right);
        }
    }

    return this;
  }


  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let currentNode = this.root;
    while(currentNode) {
        if(currentNode.val === val) return currentNode;
        // If current val is greater than the sought val, move to the left child
        if(currentNode.val > val) {
            currentNode = currentNode.left; 
        // Else, if current val is less than the sought val, move to the right child
        } else {
            currentNode = currentNode.right; 
        }
    }
    // If val not found return undefined
    return undefined; 
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, current = this.root) {
    if (!this.root === null) return undefined;

    if (val < current.val) {
      if(current.left === null) return undefined;
      return this.findRecursively(val.current.left);
    } else if (val > current.val) {
      if (current.right === null) return undefined;
      return this.findRecursively(val, current.right);
    }
    return current;
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(node = this.root) {
    // Holds array of visited nodes
    const visitedNodes = [];

    const traverse = (node) => {
      if (!node) return;
      // Visit the current node
      visitedNodes.push(node.val);
      // Recursively traverse the left subtree
      traverse(node.left);
      // Recursively traverse the right subtree
      traverse(node.right);
    };

    // Starts traversal from the root node
    traverse(node);

    // Returns an array of visited nodes.
    return visitedNodes;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(node = this.root) {
    // Holds array of visited nodes
    const visitedNodes = [];

    const traverse = (node) => {
      if (!node) return;
      // Recursively traverse the left subtree
      traverse(node.left);
      // Visit the current node
      visitedNodes.push(node.val); 
      // Recursively traverse the right subtree
      traverse(node.right);
    }
    // Starts traversal from the root node
    traverse(node);

  // Returns an array of visited nodes.
    return visitedNodes;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(node = this.root) {
    // Holds array of visited nodes
    const visitedNodes = [];

    const traverse = (node) => {
        if (!node) return; 
        // Recursively traverse the left subtree
        traverse(node.left); 
        // Recursively traverse the right subtree
        traverse(node.right);
        // Visit the current node
        visitedNodes.push(node.val); 
    };

    // Starts traversal from the root node
    traverse(node); 

    // Returns an array of visited nodes.
    return visitedNodes; 
}


  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    // Holds array of visited nodes
    const visitedNodes = [];
    // Holds array of nodes to be visited
    const queue = [];

    // If the tree is not empty, enqueue the root node to start BFS
    if (this.root) {
        queue.push(this.root);
    }

    while (queue.length > 0) {
      // Dequeue a node from the queue
      const node = queue.shift();
      // Visit the dequeued node (push its value to the visitedNodes array)
      visitedNodes.push(node.val);

      // Enqueue the left child if it exists
      if (node.left) {
          queue.push(node.left);
      }
      // Enqueue the right child if it exists
      if (node.right) {
          queue.push(node.right);
      }
    }

    // Returns an array of visited nodes.
    return visitedNodes;
  }


  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  // remove(val) {

  // }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  // isBalanced() {

  // }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  // findSecondHighest() {
    
  // }
}

module.exports = BinarySearchTree;

