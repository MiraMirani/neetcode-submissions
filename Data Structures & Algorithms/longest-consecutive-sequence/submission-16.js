class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        let seen = new Set(nums)
        console.log(seen)
        let longest = 0

        for(const num of nums){

            if(!seen.has(num-1)){
                let iteration = 1
                let temp = num+1
                while(seen.has(temp)){
                    iteration++
                    temp++
                }
            longest = Math.max(iteration, longest)


            }
        }

        return longest

    }
}
