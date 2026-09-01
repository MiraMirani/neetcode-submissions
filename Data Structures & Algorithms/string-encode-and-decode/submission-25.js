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

        console.log("strstr",str)
        while( r <= str.length ){
            // console.log("tessttt")
            if(str[r] === "@"){
                console.log(l, "left", r, "right")
                length = str.substring(l, r) 
                const word = str.substring(r+1, r + Number(length)+1) 

                res.push(word,)
                console.log("length",length)

                l = r + Number(length) + 1
                r = l
                // r = r + length + 1

            }

            r++
        }
    return res
    }
}
