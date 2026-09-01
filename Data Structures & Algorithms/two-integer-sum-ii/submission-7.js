class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {

        let map = new Map()
        for(let i = 0 ; i < numbers.length; i++){
            let neededAmount = target - numbers[i]
            if(map.has(neededAmount)){
                return [  
                    Math.min(
                        i++, map.get(neededAmount)+1
                    ),
                    Math.max(
                        i++, map.get(neededAmount)+1
                    ),
                ]
            }else{
                map.set(
                    numbers[i],
                    i
                )

            }
        }

        return []

    }
}
