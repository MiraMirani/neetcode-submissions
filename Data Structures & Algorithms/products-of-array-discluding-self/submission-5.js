class Solution {

    // productExceptSelf(nums) {
    //     let cross = 1
    //     let res = []
    //     let zero =  0
    //     for( let i = 0 ; i < nums.length ; i++ ){
    //         cross = cross * (nums[i] || 1)
    //         if(nums[i] === 0) zero++
    //     }

    //     for( let i = 0 ; i < nums.length ; i++ ){
    //         let temp = cross / (nums[i]|| 1)
    //         if(nums[i] !== 0 && zero === 1 || zero>1) {
    //                 res.push(0)
    //             } else{
    //                 res.push(temp)
    //             }
    //     }

    //     return res
    // }


    productExceptSelf(nums) {
        let modifiedInput =  new Map()
        let output = []
        for( let i = 0 ; i < nums.length ; i++ ){
            let temp = [...nums]
            if(!modifiedInput.get(i)){
                temp.splice(i, 1)
                output.push(this.recursiveProduct(temp))
            }
        }  
            return output
    }

    recursiveProduct(arr){
        if( arr.length === 0 ){
            return 1
        }
        if( arr.length === 1 ){
            return arr[0]
        }
        return arr[0] * this.recursiveProduct(arr.slice(1))
    }


}
