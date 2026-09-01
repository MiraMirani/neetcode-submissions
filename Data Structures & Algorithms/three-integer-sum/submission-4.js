class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
threeSum(nums) {
    
    if(!nums.length) return []
    let modifiedNums = nums.sort((a,b)=>a-b)
    let temp = new Map()
    if(nums[0]> 0) return []
    
    let tempArr=[]
    for(let i = 0 ; i < nums.length ; i++){
        for(let j = 0 ; j < nums.length && i !==j ; j++){
            tempArr.push({
                sum : nums[i]+nums[j],
                el : [
                    {
                    index: i,
                    val : nums[i]
                  },
                   {
                    index: j,
                    val : nums[j]
                  },
                ]
            })
        }
    }
    
    let output = new Set()
    for(let i = 0 ; i < tempArr.length ; i++){
        for(let j = 0 ; j < nums.length; j++ ){
            if((tempArr[i].sum + nums[j]) === 0 && j !==tempArr[i].el[0].index && j !==tempArr[i].el[1].index ){
                let temp = [tempArr[i].el[0].val, tempArr[i].el[1].val , nums[j]].sort((a,b)=> a-b )
                output.add(temp)
           }
        }
    }
    
    
    return [...new Set([...output].map(el=>JSON.stringify(el)))].map(el=>JSON.parse(el))
    
}
}
