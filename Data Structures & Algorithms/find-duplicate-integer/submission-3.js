class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {


        let low = 0, high = nums.length - 1


        while(high > low){

            let mid = Math.floor((low + high) / 2)
            let count = 0

            for (const num of nums){
                if(num <= mid){
                    count++
                }
            }

            if(count > mid){
                high = mid
            }else{
                low = mid + 1
            }

        }


        return low
    }
}
