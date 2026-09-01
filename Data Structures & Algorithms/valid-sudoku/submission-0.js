class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {

        let boxSeen = new Map()
        let COLS = board[0].length
        let ROWS = board.length

        for (let i = 0 ; i < ROWS ; i++){
            let rowSeen = new Set()
            let colSeen = new Set()
            for(let j = 0; j < COLS ; j++){
                if( board[i][j]!=="."){
                    if(board[i][j] > 9 || board[i][j] < 1 || rowSeen.has(board[i][j])){

                        return false
                    } else{
                        rowSeen.add(board[i][j])
                    }
                }

            if( board[j][i]!=="."){
                if(board[j][i] > 9 || board[j][i] < 1 || colSeen.has(board[j][i])){
                    return false
                } else{
                    colSeen.add(board[j][i])
                }
            }

            let blockNumber = String(Math.floor(i/3)) + Math.floor(j/3)
            if( board[i][j]!=="."){
                    if(
                        board[i][j] > 9 || 
                        board[i][j] < 1 || 
                        boxSeen?.get(blockNumber)?.has(board[i][j])
                        
                        ){
                        return false
                    } else{



                        if (!boxSeen.has(blockNumber)) {
                            boxSeen.set(blockNumber, new Set());
                            }

                            boxSeen.get(blockNumber).add(board[i][j]);

                    }
                }

                

        }
        }

        
console.log("boxSeen",boxSeen)




        return true

    }
}
