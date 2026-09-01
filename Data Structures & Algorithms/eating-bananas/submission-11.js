class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let max = piles.sort((a,b)=> b-a)[0]
        console.log(max, "maxxx")
        // answers can be between 1 to max
        let l = 0
        let r = max
        let res = max

        while(r >= l){
            let k = Math.floor((r+l)/2)
            
            let calculatedTime = piles.reduce((p,c)=> p + Math.ceil(c/k), 0)
            console.log(calculatedTime, "calculatedTime", k)
            if(calculatedTime <= h){
                res = Math.min(res, k)
            }

            if (calculatedTime > h){
                l = k + 1
            } else {
                r = k - 1
            }
        }

        return res
        
        
        }
}
