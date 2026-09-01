class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
     hasDuplicate(nums) {
        
        let seen = new Set()
        for(let num of nums){
            if(seen.has(num)) return true
            seen.add(num)
        }   
         return false
        }
}

let nums = [1, 2, 3, 4];
const checking = new Solution().hasDuplicate(nums)
