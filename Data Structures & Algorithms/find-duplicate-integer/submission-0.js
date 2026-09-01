class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {

        const sorted_nums = nums.sort()
        

        console.log("nums", sorted_nums)
        for(let i = 0 ; i < nums.length; i++){
            if(nums[i] === nums[i+1]){
                return nums[i]
            }
        }
        
    }
}
