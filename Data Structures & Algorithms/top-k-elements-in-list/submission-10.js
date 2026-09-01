class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        const map = new Map()

        const res = []

        for(const el of nums){
            map.set( el ,( map.get(el) || 0 ) + 1 )
        }
                

        console.log("map",
          [...map.entries()].sort((a,b)=>  b[1] - a[1]).splice(0,k).map((val, index)=>{
            return val[0]
          })
            )

            return           [...map.entries()].sort((a,b)=>  b[1] - a[1]).splice(0,k).map((val, index)=>{
            return val[0]
          })


    }
}
