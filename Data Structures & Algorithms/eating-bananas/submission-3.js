class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {


        let sum = piles.reduce((p, c, i)=> p + c , 0)
        let max = piles.sort((a,b)=> b-a)[0]
        let avg = Math.ceil(sum/h)
        
        for(let j = 1; j <=max ;  j++){
                let hn = 0
                for(let i = 0 ; i < piles.length ; i++){
                    hn+= Math.ceil(piles[i]/j)
                }
                if(hn <= h ){
                    return j
                }


        }

  

        return Math.max(max, avg)

    }
}
