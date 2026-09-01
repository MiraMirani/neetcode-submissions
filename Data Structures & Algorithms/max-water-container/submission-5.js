class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let area = 0
        let r = heights.length -1
        let l = 0
        while(r > l){
            const tempArea = Math.min(heights[r], heights[l]) * (r - l)
            area = Math.max(area, tempArea)
            if(heights[r] > heights[l]){
                l++
            }else {
                r--
            }
        }
        return area
    }
}
