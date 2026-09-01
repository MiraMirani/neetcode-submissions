class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        const mapData = new Map()
        const outPut = new Set()
        for(let i = 0; i< nums.length; i++){
            mapData.set( nums[i], i)
        }
        for(let i = 0; i< nums.length; i++){
            const requiredAmount = target - nums[i]
            const pairVariable =  mapData.get(requiredAmount)
            if(typeof pairVariable === 'number' && pairVariable !==i){
                outPut.add(pairVariable )
                outPut.add(i )
            }
        }

        return [...outPut]

    }
}
