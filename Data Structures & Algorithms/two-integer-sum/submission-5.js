class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    // twoSum(nums, target) {
    //     for(let i = 0 ; i < nums.length; i++){
    //         for (let j = 0 ; j< nums.length; j++){
    //             if(nums[i]+ nums[j] === target && i!==j){
    //                 return [i, j]
    //             }
    //         }
    //     }
    //  return []
    // }

    twoSum(nums, target) {


        let temp = new Map()
        for(let i = 0 ; i < nums.length; i++){
            let diff = target - nums[i]
            if(temp.has(diff)){ 
                return [i, temp.get(diff)]
            }
            temp.set(nums[i], i)
        }

        return []
    }
}
