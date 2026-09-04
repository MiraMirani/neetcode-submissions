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
        console.log("rrr",r)
        return r

    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {

        let output = [];
        let r = 0;
        let l = 0;

        while( r < str.length){
            if( str[r] === "@" ){
                let length = Number(str.substring(l,r));
                console.log("lllll", length,l,r)
                let w = str .substring(r+1, r+length+1) 
                console.log("www",w)
                output.push(w)
                l = r + 1 + Number(length)
                r = l
            }
            r++
        }

        


        return output
        
    }
}
