class Solution {

    productExceptSelf(nums) {
        let tempMap = new Map()
        for(let i = 0 ; i < nums.length; i++){
            let temp = [...nums]
            temp.splice(i, 1)
            tempMap.set(i, temp)
        }

        let cross = 1
        let res = []
        let obj = {
            minus :0,
            zero: 0
        }
        for( let i = 0 ; i < nums.length ; i++ ){
            cross = cross * (nums[i] || 1)
            if(nums[i] < 0) obj["minus"]++
            if(nums[i] === 0) obj["zero"]++
        }

        for( let i = 0 ; i < nums.length ; i++ ){
            let temp = cross / (nums[i]|| 1)
            if(nums[i] !== 0 && obj.zero === 1 || obj.zero>1) {
                    res.push(0)

                } else{
                    res.push(temp)
                }
        }


        return res
    }
}
