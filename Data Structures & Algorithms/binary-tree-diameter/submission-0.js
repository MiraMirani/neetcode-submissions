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
     * @return {number}
     */
    diameterOfBinaryTree(root) {

        if(!root){
            return 0
        }



        const left = this.maxDepth(root.left)
        const right = this.maxDepth(root.right)

        const sum = left + right

        return (
            Math.max(
                this.diameterOfBinaryTree(root.left),
                this.diameterOfBinaryTree(root.right),
                sum

            )
        )


    }


    maxDepth (root){
                if(!root){
            return 0
        }

        return (
            1 +
            Math.max(
               this.maxDepth( root.right),
               this.maxDepth( root.left)
            )
        )

    }
}
