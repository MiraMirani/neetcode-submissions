class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = ""
        for(const str of strs){
            res +=   str.length + "#"  + str
        }
        return res
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
decode(str) {
        let l = 0
        let r = 0
        const res = []
        let length = 0
        while(r  < str.length){
            if( str[r] === "#" ){
             length = Number(str.substring(l, r ))
            const temp = str.substring(r + 1, length + r + 1 )
            res.push(temp)
            r = r + length + 1
            l = r
            }
            r++
        }
        return res
    }
}
