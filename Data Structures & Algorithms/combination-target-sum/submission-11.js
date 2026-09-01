class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {

        let res  = []

        this.dfs(nums, 0, [], 0, target, res)

        console.log("4444", res)

        return res

    }

    dfs (nums, i, subset, sum, target, res){
        if(sum === target){
            console.log("sum", sum)
            res.push([...subset])
            // return

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
