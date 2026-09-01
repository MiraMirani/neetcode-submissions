class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0
        let r = heights.length - 1
        let area = 0
        while( r > l ){
            area = Math.max(area, (r - l ) * Math.min( heights[r], heights[l]))
            if( heights[r] > heights[l] ){
                l++
            }else{
                r--
            }
        }
        return area

    }
}
