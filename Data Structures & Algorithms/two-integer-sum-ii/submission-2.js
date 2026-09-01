class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {

        const map = new Map()
        for(let i = 0 ; i < numbers.length; i++){
            map.set(numbers[i], i)
        }

        for(let i = 0 ; i < numbers.length; i++){
            const required = target - numbers[i]
            if(map.has(required)){
                return [i +1, map.get(required)+1 ]

            }
        }

        return []

    }
}
