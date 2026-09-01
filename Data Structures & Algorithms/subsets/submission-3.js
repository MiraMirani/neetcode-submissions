class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {

        const res = []
        this.dfs(nums, [], 0, res)


        return res
    }


    dfs(nums, subset, index, res){

        if(index >= nums.length){
            res.push([...subset])
            return
        }

        subset.push(nums[index])
        this.dfs(nums, subset, index + 1, res)
        subset.pop()
        this.dfs(nums, subset, index + 1, res)
    }
}
