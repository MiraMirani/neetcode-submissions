class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        const mapData = new Map()

        for(let i = 0; i< nums.length; i++){
            const neededAmount = target - nums[i]
            if(mapData.has(neededAmount)){
                return [i,mapData.get(neededAmount)]
            }
            mapData.set(nums[i],i)
        }
        return [...outPut]

    }
}
