class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        let seen = new Set();
        nums.sort()
        let output = []

    console.log("hii")

        for(let el of nums){
            if(!!seen.has(el) ){
                output[output.length-1][1]++
            }else{
                 output.push([el, 1])
                 seen.add(el)
            }

            
        }
        console.log(output,33)
console.log("output.sort((a,b)=> b[1]-a[1]).slice(0, k).map(el=>el[0]),",output.sort((a,b)=> b[1]-a[1]).slice(0, k).map(el=>el[0]))
        

        return output.sort((a,b)=> b[1]-a[1]).slice(0, k).map(el=>el[0])
    }
}
