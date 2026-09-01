class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {


        const output = new Set()
        for(let i = 0 ; i < nums.length; i++){
            for (let j = 0 ; j< nums.length; j++){
                if(nums[i]+ nums[j] === target && i!==j){
                output.add(i)
                output.add(j) 
            }
            }
        }

    return [...output]
    }
}
