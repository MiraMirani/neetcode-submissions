class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {

        const output = []
        let zeroCounter = 0
        let product = 1
        for(const num of nums){
            if(num === 0 ){
                zeroCounter++
            }else{
                product = product * num
            } 
        }

    
    console.log("product", product)
        for(const num of nums){

            if(zeroCounter >= 2){
                output.push(0)
            }else if(zeroCounter === 1){
                num === 0 ? output.push(product) : output.push(0)
            }else{
                num === 0 ? output.push(product) : output.push(product/num)

            }
        }


        return output



    }
}
