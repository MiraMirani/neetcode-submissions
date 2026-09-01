class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    // topKFrequent(nums, k) {
    //     const output = {}
    //     for (let num of nums){
    //         if(!output[num]){
    //             output[num] = 0
    //         }
    //         output[num]++
    //     }

    //     let repetition = []
    //     for(let key in output){
    //         repetition.push(output[key])
    //     }
    //     repetition = repetition.sort((a,b)=>b-a)
    //     repetition.splice(k)
    //     const finalOutput = []
    //     for(let key in output){
    //         const isFind = repetition.find(el=>output[key]===el)
    //         if(isFind ){
    //             finalOutput.push(key) 
    //         }
    //     }
    //     return finalOutput
    // }


    topKFrequent(nums, k){
        let object = {}
        for(let i = 0 ; i < nums.length ; i++){
            if(!object[nums[i]]){
                object[nums[i]] = 0
            }
            object[nums[i]]++
        }

        let arr = []
        for(let key in object){
            arr.push({key: key, count: object[key]})
        }
        arr.sort((a,b)=> b.count- a.count).splice(k)

        return arr.map(el=>el.key)
    }
}
