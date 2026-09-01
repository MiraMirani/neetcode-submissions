class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        let output = []
        for(let i = 0 ; i <= n ; i++){
        let convertedString = i.toString(2)
        console.log(convertedString)
            output.push(convertedString.split("0").join("").length)
        }

        return output
    }
}
