class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {

        let zeroCounter = 0
        let k = 1
        let output = []

        for (const num of nums){
            if(num === 0 ){
                zeroCounter++
            }else{
                k = k*num
            }
        }

        for( const num of nums){
            if(zeroCounter === 0){
                output.push(k/num)
            }else if(zeroCounter === 1){
                if(num === 0 ){
                    output.push(k)
                }else{
                    output.push(0)
                }
            }else{
                return new Array(nums.length).fill(0 )
            }
        }

        return output



    }
}
