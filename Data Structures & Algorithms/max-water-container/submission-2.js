class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {

        let maxArea = 0
        let r = heights.length - 1
        let l = 0
        while(r > l){
            console.log("rrrr",r)

            const tempArea = Math.min(heights[r], heights[l]) * (r - l)
            console.log(tempArea, "temmpppp")
            maxArea = Math.max(maxArea, tempArea)
            if(heights[r]> heights[l]){
                l++
            }else{
                r--
            }
            
        }

        return maxArea

        
    }
}
