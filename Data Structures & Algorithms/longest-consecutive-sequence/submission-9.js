class Solution {
  longestConsecutive(nums) {
    const numSet = new Set(nums);
    let longest = 0;

    for (const num of numSet) { // iterate set to avoid repeats
      if (!numSet.has(num - 1)) {
        let length = 1;
        while (numSet.has(num + length)) {
          length++;
        }
        longest = Math.max(longest, length);
      }
    }

    return longest;
  }
}