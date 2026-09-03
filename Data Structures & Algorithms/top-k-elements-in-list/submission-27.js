class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        let hash = new Map();

        for(let el of nums){
            hash.set(el, (hash.get(el)??0)+1 )
 
        }
        

        return [...hash.entries()].sort((a,b)=>b[1]-a[1]).slice(0,k).map(e=>e[0])
    }
}
