class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        // brute force

        let res = []
        for(let i = 0 ; i < temperatures.length ; i++){
            let flag = false
            for( let j = i + 1 ; j < temperatures.length ; j++){
                if(temperatures[j] > temperatures[i] ){
                    console.log("jjjjj", i, j)
                    flag = true
                    res.push(j-i)
                    break;
                }
            }
            if(!flag){
                res.push(0)
            }


        }

        return res
        
    }
}
