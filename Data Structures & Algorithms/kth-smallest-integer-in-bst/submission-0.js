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

        let set = new Set()

        this.dfs(root, set)
        console.log([...set].sort()[k-1], "sss")

        return [...set].sort()[k-1]

    }

    dfs(root,set){
        if(!root){
            return
        }
        if(root.val){
            set.add(root.val)
        }


        this.dfs(root.left, set)
        this.dfs(root.right, set)
    }
}
