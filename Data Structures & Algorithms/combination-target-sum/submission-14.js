class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let res  = []
        this.dfs(nums, 0, [], 0, target, res)
        return res
    }

    dfs (nums, i, subset, sum, target, res){
        console.log("sssss", subset, i)
        if(sum === target){
            res.push([...subset])
        }
        if(i >= nums.length || sum >= target ){
            return
        }
        
        subset.push(nums[i])
        this.dfs(nums, i , subset, sum + nums[i] , target , res)
        subset.pop()
        this.dfs(nums, i + 1, subset , sum , target , res)
    }
}
