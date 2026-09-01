class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let max = piles.sort((a,b)=> b-a)[0]
        // answers can be between 1 to max
        let l = 0
        let r = max
        let res = max

        while(r >= l){
            let k = Math.floor((r+l)/2)
            
            let calculatedTime = piles.reduce((p,c)=> p + Math.ceil(c/k), 0)

            if (calculatedTime <= h){
                r = k - 1
                res = Math.min(res, k)
            } else {
                l = k + 1

            }
        }

        return res
        
        
        }
}
