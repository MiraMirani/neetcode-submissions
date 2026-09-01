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
    goodNodes(root) {


        if(!root){

            return 0
        }


        let data = {
            count: 0
        }

        const test = this.dfs(root, data, root.val)

        console.log("tesst", data)

        

        return data.count


        
    }


    dfs(root, data, maxVal){

        if(!root){
            return null
        }
        
        if(root.val >= maxVal){
            data.count++
            // console.log("count", count)
            maxVal = root.val
        }


        this.dfs(root.left, data, maxVal)
        this.dfs(root.right, data, maxVal)

    }
}
