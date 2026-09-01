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
     * @return {boolean}
     */
    isBalanced(root) {

        if(!root){
            return true
        }

        const right  = this.maxHeight(root.right)
        const left = this.maxHeight(root.left)
        
        const diff = Math.abs(right - left)

        console.log("diff", diff)
        if(diff > 1){
            return false
        }else{
            true
        }


        return(

        this.isBalanced(root.right) &&
        this.isBalanced(root.left)
        )


        return false



    }

    maxHeight (root){

        if(!root){
            return 0
        }

        return (
            1 +
            Math.max(
                this.maxHeight(root.left),
                this.maxHeight(root.right)
            )
        )
    }
}
