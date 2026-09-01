class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {

        let storage = []
        let res = []
        this.dfs(nums, [], storage, 0, target, 0)

        // console.log(storage.length, "sss")
     
        console.log("storage", storage)
        return storage
        
    }



    dfs(nums, subset, storage, index, target, sum){
        console.log("sumsumsum", sum, subset)


        if(index >= nums.length || sum > target){
            if(sum === target) storage.push([...subset])

            return
        }


        subset.push(nums[index])
        this.dfs(nums, subset, storage, index, target, sum +  nums[index] )
        subset.pop()
        this.dfs(nums, subset, storage, index + 1, target, sum)

    }
}
