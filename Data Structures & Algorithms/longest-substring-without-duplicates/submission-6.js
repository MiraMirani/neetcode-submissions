class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let longest = ""
        let temp = ""
        for (let i = 0 ; i < s.length; i++){
            let check = temp.split("").find(el => el === s[i] )
            if( !check ){
                temp += s[i]
                if(temp.length > longest.length){
                    longest = temp
                }
            } else {
                const findLC = s.slice(0, i).lastIndexOf(s[i])
                temp = s.slice(findLC, i)
            }

        }

        return longest.length
    }
}
