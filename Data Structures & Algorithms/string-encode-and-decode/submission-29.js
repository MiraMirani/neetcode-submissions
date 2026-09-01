class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {

        let res = ""
        for(const ch of strs){
            res +=  ch.length + "@" + ch
        }
        return res
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {

        let r = 0
        let l = 0
        let length = 0
        const res = []

        while( r <= str.length ){
            if(str[r] === "@"){
                length = str.substring(l, r) 
                const word = str.substring(r+1, r + Number(length)+1) 
                res.push(word,)
                l = r + Number(length) + 1
                r = l 
            }
            r++
        }
    return res
    }
}
