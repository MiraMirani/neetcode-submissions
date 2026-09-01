class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

        const storedData = new Set()

        for (let i = 0 ; i < nums?.length ; i++){
            if(!storedData.has(nums[i])){
                storedData.add(nums[i])
            }else {
                return true
            }
        }
        return false



    }
}
