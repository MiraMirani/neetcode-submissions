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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let stack = []
        this.dfs(root, stack)
        return stack[k-1]

    }


    dfs(root, stack){

        if(!root ){
            return
        }

        this.dfs(root.left, stack,)
        stack.push(root.val)
        this.dfs(root.right, stack, )

    }
}
