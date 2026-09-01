class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {

        let storage = []
        this.dfs(nums, [], storage, 0, target, 0)
        return storage
        
    }

    dfs(nums, subset, res, index, target, sum) {
        if (sum === target) {
            res.push([...subset]);
            return;
        }
        if (sum > target || index >= nums.length) return;

        subset.push(nums[index]);
        this.dfs(nums, subset, res, index, target, sum + nums[index]);
        subset.pop();

        this.dfs(nums, subset, res, index + 1, target, sum);
}
    
}
