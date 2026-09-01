class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {

        let longest = 0
        let l = 0
        let r = 0
        const set = new Set()
        while(r < s.length ){
            if(set.has(s[r])){
                set.clear()
                l++
                r=l
            }else{
                longest = Math.max(longest , r - l + 1)
                set.add(s[r])
                r++
            }

        }   
        console.log("setset",set)
        return longest
    }
}
