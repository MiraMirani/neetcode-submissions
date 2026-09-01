class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {

        const pair = position.map((p, i)=>[p, speed[i]])
        const stack = []
        pair.sort((a, b)=>b[0]- a[0])

        for (let el of pair){
            const [p, s] = el
            const reachingTime = (target- p)/s
            stack.push(reachingTime)
            if(stack.length >1 && 
            stack[stack.length -2] >= stack[stack.length - 1]){
                stack.pop()
            }

        }

        return stack.length
    }
}
