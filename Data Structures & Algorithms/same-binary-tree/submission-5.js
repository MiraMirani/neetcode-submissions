/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        if(!p && !q){
            return true
        }

        if(
            (p?.val !== q?.val)||
            (p?.left?.val !== q?.left?.val) || 
            (p?.right?.val !== q?.right?.val)
        
        
         ){
            return false
        }

        console.log("pq", p, q  )
        

        return (
            this.isSameTree(p?.left, q?.left) &&
            this.isSameTree(p?.right, q?.right)
        )
    }
}
