class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        
        let l = 0
        let r = nums.length - 1
        let min = nums[0]
        
        while(r >= l){
            if(nums[r]>=nums[l]){

                min = Math.min(nums[l], min)
                break
            }

            let mid = Math.floor(( r + l ) / 2)
            min = Math.min(nums[mid], min)

            if(nums[r] > nums[mid]){
                r = mid -1
            }else{
                l = mid +1
            }

        }

        return min
    }
}
