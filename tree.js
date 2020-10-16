/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {

    let sum = 0;
    
    if(this.root){

      const toVisitedStack = [this.root];
      
      while(toVisitedStack.length){
        const current = toVisitedStack.pop();
        
        sum += current.val;
        
        for(let child of current.children) toVisitedStack.push(child)
      }
    }
      return sum
  } 

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {

    let count = 0;

    if(this.root){
      const toVisitedQueue = [this.root];

      while(toVisitedQueue.length){
        const current = toVisitedQueue.shift();

        if(current.val % 2 === 0) count++

        for(let child of current.children) toVisitedQueue.push(child)
      }
    }

    return count

  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    let count = 0;

    if(this.root){
      const toVisitedStack = [this.root]

      while(toVisitedStack.length){
        const current = toVisitedStack.pop()

        if(current.val > lowerBound) count++;

        for(let child of current.children) toVisitedStack.push(child)
      }
    }

    return count
  }
}

module.exports = { Tree, TreeNode };
