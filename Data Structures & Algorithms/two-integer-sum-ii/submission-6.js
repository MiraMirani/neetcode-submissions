class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {

        
        let r = numbers.length - 1;
        let l = 0;

        while( r >l ){
            
            if(numbers[r] + numbers[l]  === target){
                return [l+1, r+1]
            }
            if(numbers[r] + numbers[l] > target ){
                r--
            }else{
                l++
            }
        }

        return []
    }
}
