class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numSet = new Set(nums)
        let longest = 0
        console.log("numSet", numSet)

        for(const el of nums){
            if(!numSet.has(el-1)){
                let iteration = 1
                while(numSet.has(el+iteration)){
                    iteration++
                }
                longest =  Math.max(longest , iteration)


            }
            console.log(el, "ellll")
        }

        return longest

    }
}
