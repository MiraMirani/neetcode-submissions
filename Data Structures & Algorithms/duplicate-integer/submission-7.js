class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

        const storedArray = new Set()

        for(let i of nums){
            if(!storedArray.has(i)){
                storedArray.add(i)
            }else{
                return true
            }
        }

        return false
    }
}
