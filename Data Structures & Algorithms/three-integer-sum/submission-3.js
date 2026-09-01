class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {

        let output = []
        for(let i = 0 ; i < nums.length; i++){

            for(let j= 0; j<nums.length; j++){
                for(let k=0; k < nums.length ; k++){
                    if( nums[i]+nums[j]+ nums[k]=== 0 && i!==j && j!==k && i!==k){
                        let checking = output.find(el=>el.sort().toString() ===[nums[i], nums[j], nums[k]].sort().toString())
                        if(!checking){
                             output.push([nums[i], nums[j], nums[k]])
                        }
                    }
                }
            }
        }

        return output

    }
}
