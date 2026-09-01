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

        let memory = []

        this.dfs(root, memory)

        console.log(memory, "mmmm")
        return memory.sort()[k-1]

    }

    dfs(root,memory){
        if(!root){
            return
        }
        if(root.val){
            memory.push(root.val)
        }


        this.dfs(root.left, memory)
        this.dfs(root.right, memory)

        return memory
    }
}
