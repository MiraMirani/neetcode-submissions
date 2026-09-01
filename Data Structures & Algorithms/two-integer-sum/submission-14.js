class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

    const seen = new Map()
    for(let i = 0 ; i < nums.length ; i++){
        const requiredAmount = target - nums[i]
        console.log("requiredAmount", requiredAmount)
        if(seen.has(requiredAmount)){
            return [i, seen.get(requiredAmount)]
        }
        seen.set(nums[i],i)
    }  
     return []

    }
}
