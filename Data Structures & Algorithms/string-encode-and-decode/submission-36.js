class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        
        let r = ""
        
        for(let s of strs){
            r +=  s.length + "@" + s
        }
        return r

    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {

        let output = [];
        for(let r = 0; r < str.length ; r++){
            let l = r
            while(str[r] !== "@"){
                r++
            }

            let length = Number(str.split("").slice(l, r).join(""));
            console.log("lengthlength",length)

            let w = str.split("").slice(r+1, r+length+1).join("")
            output.push(w)
            console.log(length)
            r += length
        }


        return output
        
    }
}
