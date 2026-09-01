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
     * @return {TreeNode}
     */
    // invertTree(root) {

    //     if(!root?.val){
    //         return root
    //     }

    //     let children = [root]
    //     while(children.length ){
    //         for(let child of children){
    //             let temp = child.left 
    //             child.left = child.right
    //             child.right = temp
    //             children = children.filter(el=> el.val !== (child?.val ))
    //             if(child?.left){
    //                 children.push(child?.left)
    //             }
    //             if(child?.right){
    //                 children.push(child?.right)
    //             }
    //         }
    //     }

    //     return root

    // }

    invertTree(root){

        if(!root) return null

        const node = new TreeNode(root.val);

        node.right = this.invertTree(root.left);
        node.left = this.invertTree(root.right);
        return node
    }
}
