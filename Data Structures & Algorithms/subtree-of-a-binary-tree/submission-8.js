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
     * @param {TreeNode} root
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        console.log("isSubtree")
        if(
          this.isSameTree(root, subRoot)  
        ){
            return true
        }

        if(!subRoot){
            return true
        }
        if(!root ){
            return false
        }
        if(!root || !subRoot){
            return false
        }


        return (
            this.isSubtree(root?.left, subRoot) ||
            this.isSubtree(root?.right, subRoot)

        )


    }

    isSameTree(p, q,){

        if(!p && !q){
            console.log("4444")
            return true
        }
        if(!p || !q){
            return false
        }

        if(p?.val !== q?.val){
            return false
        }
        return(
            this.isSameTree(p.left, q.left) &&
            this.isSameTree(p.right, q.right)
        )
    }
}
