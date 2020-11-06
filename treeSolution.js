function Node(key) {
  this.key = key;
  this.parent = null;
  this.left = null;
  this.right = null;
}

function Tree() {
  this.root = null;
}

//-------------------------------Count number of nodes-----------------------------------------

Tree.prototype.countNode = function (node) {
  if (!node) {
    return 0;
  }
  return 1 + this.countNode(node.left) + this.countNode(node.right);
};

Tree.prototype.count = function () {
  return this.countNode(this.root);
};

//-------------------------------Height of the tree---------------------------------------------

Tree.prototype.height = function () {
  return this.countHeight(this.root);
};

Tree.prototype.countHeight = function (node) {
  if (!node) return 0;
  const a = this.countHeight(node.left);
  const b = this.countHeight(node.right);
  return 1 + (a > b ? a : b);
};

//-----------------------------------Max Value-------------------------------------------------
Tree.prototype.max = function () {
  let node = this.root;
  while (node.right != null) {
    node = node.right;
  }
  return node.key;
};

//---------------------------------------Number of leaves---------------------------------------
Tree.prototype.countLeaves = function (node) {
  if (!node) return 0;
  if (node.right == null && node.left == null) return 1;
  return this.countLeaves(node.right) + this.countLeaves(node.left);
};

Tree.prototype.leaves = function () {
  return this.countLeaves(this.root);
};

//---------------------------------------isFull---------------------------------------------------
Tree.prototype.full = function (node) {
  if (node === null) {
    return true;
  }

  if (
    (node.right != null && node.left == null) ||
    (node.right == null && node.left != null)
  )
    return false;

  return this.full(node.right) && this.full(node.left);
};

Tree.prototype.isFull = function () {
  return this.full(this.root);
};

//---------------------------------------Insert---------------------------------------------------
Tree.prototype.insert = function (key) {
  let root = this.root;

  if (!root) {
    this.root = new Node(key);
    return;
  }

  let currentNode = root;
  let newNode = new Node(key);

  while (currentNode !== null) {
    if (key < currentNode.key) {
      if (!currentNode.left) {
        currentNode.left = newNode;
        newNode.parent = currentNode;
        break;
      } else {
        currentNode = currentNode.left;
      }
    } else {
      if (!currentNode.right) {
        currentNode.right = newNode;
        newNode.parent = currentNode;
        break;
      } else {
        currentNode = currentNode.right;
      }
    }
  }
};

//----------------------Creation of the tree--------------------------
let bst = new Tree();

//----------------------Insertion of values---------------------------
bst.insert(20);
bst.insert(9);
bst.insert(25);
bst.insert(5);
bst.insert(12);
bst.insert(11);
bst.insert(14);

//----------------------Calling functions------------------------------
console.log(bst.isFull()); // true
console.log(bst.height()); // 4
console.log(bst.max()); // 25
console.log(bst.leaves()); // 4
console.log(bst.count()); // 7
