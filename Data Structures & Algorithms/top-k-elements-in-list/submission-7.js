class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map()

        for(const num of nums){
            map.set(num, (map.get(num) || 0)+1)
        }

       const test =  [...map]
       .sort((a,b)=> b[1] - a[1])
       .splice(0,k).map((val)=>{
        console.log(2222, val)
        return val[0]
       })
        console.log(test, "teesstt")

        return test

    }
}
