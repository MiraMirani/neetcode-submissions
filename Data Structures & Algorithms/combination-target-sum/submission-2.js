class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {

        let storage = []
        let res = []
        this.dfs(nums, [], storage, 0, target)

        console.log(storage.length, "sss")
        for(const el of storage){
            let sum = el.reduce((p, c) => p+ c, 0)
            console.log("ssssuumss", sum)
            if(sum === target){
                res.push([...el])
            }
        }

        console.log("resss", res)
        return res
        
    }



    dfs(nums, subset, storage, index, target){

        let sum = subset.reduce((p, c) => p + c, 0)
        if(index >= nums.length ){
            if(sum <= target) storage.push([...subset])
            return
        }
        if(sum > target){
            return
        } 

        subset.push(nums[index])
        this.dfs(nums, subset, storage, index, target)
        subset.pop(nums[index])

        this.dfs(nums, subset, storage, index + 1, target)

    }
}
