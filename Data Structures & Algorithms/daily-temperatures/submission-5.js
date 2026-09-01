class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let res = new Array(temperatures.length).fill(0)
        let stack = []

        for (let i = 0 ; i < temperatures.length; i++){
            let t = temperatures[i]
            while( stack.length &&  t > stack[stack.length - 1][0] ){
                let [t, index] = stack.pop()
                res[index] = i - index
            }
            stack.push([t, i])
        }

        console.log(stack, "sssss")

        console.log(res, "map")


        return res

    }
}
