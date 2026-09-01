class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {

        const output = new Array(temperatures.length ).fill(0)
        const stack = []

        for(let i = 0 ; i < temperatures.length ; i ++){
            const t = temperatures[i]
            while(stack.length && t > stack[stack.length-1][0] ){
                const [stackT, stackInd] = stack.pop()

                output[stackInd] = i - stackInd

            }

            stack.push([t, i])


        }



        return output
    }
}
