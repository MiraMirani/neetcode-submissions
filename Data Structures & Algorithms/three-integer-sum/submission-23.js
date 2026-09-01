class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {

        const map = new Map()
        const output = new Map()
        for(let i = 0; i < nums.length ; i++){
            
            for(let j = 0; j < nums.length ; j++){
                const target = parseInt(- (nums[i] + nums[j]))
                if(map.has(target)){
                    const index = map.get(target)
                    if( index !== i && index !==j  && i !== j ) {
                        const key = [target ,nums[i] , nums[j]].sort((a,b)=> a-b).toString()
                        output.set(key, [nums[i],nums[j], target])
                        }
                }else{
                      map.set(nums[j], j)
                }
            }

        }

        return [...output.values()]

    }
}
