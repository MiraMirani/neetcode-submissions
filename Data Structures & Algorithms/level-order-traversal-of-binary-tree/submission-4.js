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
     * @return {number[][]}
     */
    levelOrder(root) {

        if(!root){
            return []
        }

        let res = new Map()

        this.depth(root, res, 0)

    return [...res.values()]

    }

    depth(child,res, level ){
        if(!child){
            return null
        }
        if(!res.has(level)) res.set(level, [])
        res.get(level).push(child.val)
 
        this.depth(child.left, res, level+1)
        this.depth(child.right, res, level+1)

    }
}
