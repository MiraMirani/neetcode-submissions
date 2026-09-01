class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {


        const ROWS = matrix.length 
        const COLS = matrix[0].length

        let top = 0
        let bot = ROWS - 1
        let row 

        while(bot >= top){
            row = Math.floor((bot+top)/2)

            if(target > matrix[row][COLS-1]){
                top = row+1
            }else if(target < matrix[row][0]){
                bot = row-1
            }else{
                break;
            }
            
        }

        let l = 0
        let r = COLS - 1
        let mid 

        while(r >= l){
            mid = Math.floor((r+l)/2)
            if(target === matrix[row][mid]){
                return true
            }
            if(target > matrix[row][mid]){
                l = mid +1
            }else{
                r = mid-1
            }
            
        }


        return false


        
    }
}
