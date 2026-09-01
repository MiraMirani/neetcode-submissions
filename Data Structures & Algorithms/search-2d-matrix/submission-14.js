class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {

        const ROWS = matrix.length 
        const COLS = matrix[0].length 
        console.log("ROWS", ROWS, "COLS",COLS)

        
        let u = 0
        let d = ROWS - 1
        let r_m = 0
        while (d >= u ){
            r_m = Math.floor( (u + d )/2)
            if( target > matrix[r_m][COLS-1]){
                u = r_m + 1
            }else if(target < matrix[r_m][0]){
                d = r_m - 1
            }else{
                break;
            }

        }

        let l = 0
        let r = COLS - 1
        while (r >= l ){
            let m = Math.floor((r+l)/2)
            if(matrix[r_m][m]=== target) return true
            if( target > matrix[r_m][m]){
                l = m + 1
                
            }else{
                r = m - 1
            }
        }




        return false



    }
}
