class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let output = [];
        let cross = 1;
        let zeroCounter = 0
        for(let e of nums){
            if(e !== 0) {
                cross = e * cross
                }else{
                    zeroCounter++
            }

        }
        for(let e of nums){
            if(zeroCounter >1) {
                output.push(0)
            }else if(zeroCounter === 1){
                if(e === 0){
                    output.push(cross)
                }else{
                    output.push(0)
                }
            }else{
                output.push(cross/e)
            }
        }   

        return output
    }
}
