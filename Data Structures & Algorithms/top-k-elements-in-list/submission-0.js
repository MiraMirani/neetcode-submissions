class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const output = {}
        let firstIndex = 0
        let secondIndex = 0

        for (let num of nums){
            if(!output[num]){
                output[num] = 0
            }
            output[num]++
        }

        let repetition = []
        for(let key in output){
            repetition.push(output[key])
        }
        repetition = repetition.sort((a,b)=>b-a)
        repetition.splice(k)
        const finalOutput = []
        for(let key in output){
            const isFind = repetition.find(el=>output[key]===el)
            if(isFind ){
                finalOutput.push(key) 
            }
        }
        

        return finalOutput
    }
}
