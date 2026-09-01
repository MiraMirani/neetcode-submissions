class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        if(!nums.length) return 0
        const modifiedNums = [...new Set(nums.sort((a,b)=> a - b))]

        let temp = modifiedNums[0]
        let longest = 0
        let longestTemp = 0
        for(let i = 0 ; i < modifiedNums.length ; i++){

            console.log( "temp",temp, "modifiedNums[i+1]", modifiedNums[i+1], "longestTemp",longestTemp)
            if( modifiedNums[i+1] === temp + 1 ){
                longestTemp++
                temp = modifiedNums[i+1]
            } else {
                longestTemp = 0
                temp =  modifiedNums[i+1]
            }

            if(longestTemp >= longest){
                longest = longestTemp
            }


        }


        return longest+1
    }
}
