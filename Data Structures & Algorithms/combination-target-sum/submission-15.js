class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {


        let res = []
        this.dfs(nums, target, 0, res, 0, [])

        return res

    }


    dfs(nums, target, i, res, sum, temp ){

        if(target === sum) res.push([...temp])
        if(i >= nums.length || sum>= target){
            return
        }

        
        temp.push(nums[i])
        this.dfs(nums, target, i, res, sum + nums[i] , temp )
        temp.pop(nums[i])
        this.dfs(nums, target, i+1, res,sum , temp )

    }
}
