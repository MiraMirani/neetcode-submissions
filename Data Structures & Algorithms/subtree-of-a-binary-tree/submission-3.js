
class Solution {

    isSubtree(root, subRoot){

        if(!root) return false
        
        if(this.isSameTree(root, subRoot)){
            return true
        }

        const result = (this.isSubtree(root?.left, subRoot)  || this.isSubtree(root?.right, subRoot))
        return result


    }


      isSameTree(p, q) {
        if (!p && !q) return true;  
        if (!p || !q) return false; 
        if (p.val !== q.val) return false; 

        return this.isSameTree(p.left, q.left) && this.isSameTree(p.right, q.right);
    }

        
    isSubtree_V2(root, subRoot) {
        

        let children = [root]
        let flag = false
        while(children.length){
            let tempArray = []
            for(let child of children){
                if(child?.left){
                     tempArray.push(child?.left)
                }
                if(child?.right){
                    tempArray.push(child?.right)
                }

                if(child.val === subRoot.val){
                    flag = JSON.stringify(subRoot) === JSON.stringify(child)
                    if(flag) break;
                }

            }
            children = tempArray
        }

        return flag
    }
}
