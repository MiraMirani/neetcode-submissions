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



    // dfs(nums, subset, storage, index, target, sum){


    //     if(index >= nums.length || sum > target){
    //         if(sum === target) storage.push([...subset])

    //         return
    //     }


    //     subset.push(nums[index])
    //     this.dfs(nums, subset, storage, index, target, sum +  nums[index] )
    //     subset.pop()
    //     this.dfs(nums, subset, storage, index + 1, target, sum)

    // }

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
