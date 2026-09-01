class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {

        let l = 0 
        let r = nums.length - 1

        while(r >= l){

            const mid = Math.floor((r+l)/2)
            if(nums[mid] === target){
                return mid
            }

            // left hand is sorted
            if( nums[l] <= nums[mid] ){
                if(nums[l] <= target && target < nums[mid]){
                    r = mid - 1
                }else{
                    l = mid + 1
                }
            // right hand is sorted
            }else{

                if(nums[r] >= target && target > nums[mid]){
                    l = mid + 1
                }else{
                    r = mid -1
                }

            }

        }

        return -1

    }
}
