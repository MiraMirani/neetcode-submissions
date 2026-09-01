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
     * @return {number[]}
     */
    rightSideView(root) {

        let map = new Map()
        let res = []

        this.getDepth(root, map, 0)
        for(const el of map.values()){
            res.push(el.pop())
        }

        return res
        
    }


    getDepth(root, map, level){
        if(!root){
            return null
        }

        if(!map.has(level)) map.set(level, [])
        map.get(level).push(root.val)

        this.getDepth(root.left, map, level+1)
        this.getDepth(root.right, map, level + 1)
    }
}
