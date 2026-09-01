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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {

        if(preorder.length === 0){
            return null
        }

        let root = new TreeNode(preorder[0])
        let indexOf = inorder.indexOf(preorder[0])
        root.left = this.buildTree(
            preorder.slice(1, indexOf+1),
            inorder.slice(0, indexOf)
        )
        root.right = this.buildTree(
            preorder.slice(indexOf+1),
            inorder.slice(indexOf+1)
        )

        console.log("root", root)
        return root



    }



}
