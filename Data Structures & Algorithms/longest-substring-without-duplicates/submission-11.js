class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {

        let longest = 0
        let l = 0
        let r = 0
        const map = new Map()
        while(r < s.length ){
            if(map.has(s[r])){
                l = Math.max(l , map.get(s[r])+1)
            }
            map.set(s[r], r)
            longest = Math.max(longest , r - l + 1)
            r++
  
        }   
        return longest
    }
}
