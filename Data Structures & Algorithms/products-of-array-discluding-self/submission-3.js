class Solution {

    productExceptSelf(nums) {
        let cross = 1
        let res = []
        let zero =  0
        for( let i = 0 ; i < nums.length ; i++ ){
            cross = cross * (nums[i] || 1)
            if(nums[i] === 0) zero++
        }

        for( let i = 0 ; i < nums.length ; i++ ){
            let temp = cross / (nums[i]|| 1)
            if(nums[i] !== 0 && zero === 1 || zero>1) {
                    res.push(0)
                } else{
                    res.push(temp)
                }
        }

        return res
    }
}
