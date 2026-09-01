class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {


        let r = 0
        let l = 0
        let map = new Map()
        let res = 0

        while(r < s.length){

            //  rule 
            map.set(s[r], (( map.get(s[r]) || 0 ) + 1 ))

            // we need a condition for checking 
            if( (r - l+1) - this.findMostFrequentCount(map) <= k){
                console.log(2222, r ,l, "this.findMostFrequentCount(map)",this.findMostFrequentCount(map))
                res = Math.max(res, r - l + 1)
   
            } else {
                while( (r - l+1) - this.findMostFrequentCount(map) > k){
                    console.log("8888")
                    map.set(s[l], ( map.get(s[l])  - 1 ))
                    l++
                }
  
            }
            r++
        }

        return res

    }

    findMostFrequentCount(map){    
        return [...map.entries()].sort((a,b)=>b[1]- a[1])[0][1]
    }
}
