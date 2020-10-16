/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    let minDepth  = 0;
    if(this.root){
      minDepth += 1;

      const toVisitedQueue = [this.root];
      
      while(toVisitedQueue.length){
        const current = toVisitedQueue.shift();

        if(current.left || current.right){
          minDepth += 1;
        }
      }

    }
    return minDepth;

  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    let maxDepth  = 0;
    if(this.root){
      maxDepth += 1;

      const toVisitedQueue = [this.root];
      
      while(toVisitedQueue.length){
        const current = toVisitedQueue.shift();

        if(current.left || current.right){
          maxDepth += 1;
        }

        if(current.left) toVisitedQueue.push(current.left)
        if(current.right) toVisitedQueue.push(current.right)
      }

    }
    return maxDepth;
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let results = 0;
    function helper(node){
      if(node === null) return 0;

      let leftSum = helper(node.left)
      let rightSum = helper(node.right)

      results = Math.max(results, leftSum + node.val + rightSum)
      return Math.max(0, leftSum + node.val, rightSum + node.val)
    }

    helper(this.root)
    return results
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    let smallVal = null

    if(this.root){
      const toVisitedStack = [this.root];
      
      if(this.root.val > lowerBound){

        smallVal = this.root.val
      }

      while(toVisitedStack.length){
        const current = toVisitedStack.pop();

        if(current.left){
          if(current.left.val > lowerBound){

            smallVal = Math.min(current.left.val, smallVal)
          }
          toVisitedStack.push(current.left)
        }
        if(current.right){
          if(current.right.val > lowerBound){

            smallVal = Math.min(current.right.val, smallVal)
          }
          toVisitedStack.push(current.right)
          
        }
      }
    }
    return smallVal

  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
