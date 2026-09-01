class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number} - a positive integer
     */
    reverseBits(n) {
        let newStr = ""
        let converted = n.toString(2)

        console.log(converted, "convertedconverted",n)
        for(let i = 0 ; i< 32 ; i ++){
            newStr+= converted[converted.length-1-i] || "0"
        }

        let res = 0;
        for (let i = 0; i < 32; i++) {
            if (newStr[31 - i] === "1") { 
                res |= (1 << i);
            }
        }
        
        return res >>> 0;
        return newStr

    }
}
