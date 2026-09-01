class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let temp_map = new Map()
        for(let i = 0 ; i < nums.length; i++){
            
            let j = temp_map.get(nums[i])
            if( temp_map.has(nums[i]) &&  j !== i   ){
                return [Math.min(i, j), Math.max(i,j)]
            }
                        temp_map.set(target - nums[i], i) 

        }
        return []
    }
}
