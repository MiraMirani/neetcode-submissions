
class Solution {

    isSameTree(p, q) {

        if(p?.val !== q?.val ){
            return false
        }
        if(!p && !q){
            return true
        }
        if(!p || !q){
            return true
        }

        return (
            this.isSameTree(p?.right, q?.right) && 
            this.isSameTree(p?.left, q?.left)
            )
    }
}
