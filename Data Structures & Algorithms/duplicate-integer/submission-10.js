class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

        let temp = new Set();
        
        for(let el of nums){
            console.log(el)
            if(temp.has(el)){
                return true
            }
            temp.add(el)

        }
        return false

    }
}
