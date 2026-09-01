class Solution {
  subsets(nums) {
    let res = [];

    function dfs(index, path) {
      if (index === nums.length) {
        res.push([...path]);
        return;
      }

      // Take the number
      path.push(nums[index]);
      dfs(index + 1, path);

      // Don't take the number
      path.pop();
      dfs(index + 1, path);
    }

    dfs(0, []);
    return res;
  }
}