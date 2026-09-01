class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        
        const ROWS = matrix.length
        const COLS = matrix[0].length


        // we need two binary search here, one for 
        // finding row and anotehr for finding column

        let top = 0 
        let bot = ROWS -1
        let row

        while(bot >= top){
             row = Math.floor((top+bot)/2)

            if(target > matrix[row][COLS-1]){
                top = row +1
                
            }else if(target < matrix[row][0]){
                bot = row -1
            }else {
                break;
            }
        }

        console.log("row, ", row)

        let r = COLS-1
        let l = 0

        while(r >=l){
            const m = Math.floor((r+l)/2)
            if(target === matrix[row][m]){
                return true
            }
            if(target > matrix[row][m]){
                l = m + 1

            }else if(target < matrix[row][m]){
                r = m -1

            }
        }


        return false




    }
}
