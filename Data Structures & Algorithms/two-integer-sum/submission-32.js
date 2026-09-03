class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        let hashMap = new Map();
        for(let i = 0 ; i< nums.length; i++){
            let requiredAmount = target - nums[i];

            if(hashMap.has(requiredAmount)){
                return [hashMap.get(requiredAmount),i]
            }
            hashMap.set(nums[i], i)
            
        }
        console.log(hashMap,333)
    }
}
