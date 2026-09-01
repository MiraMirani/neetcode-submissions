class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {

        let data = []
        let res = 0
        let stack = []
        
        for(let i = 0 ; i< position.length; i++){
            data.push(
                [position[i],
                speed[i]]
            )
        }
        data.sort((a,b)=> b[0] - a[0] )

        console.log("data",data)
        for(let i = 0 ; i< data.length; i++){
            let time = (target - data[i][0] )/ data[i][1]
            stack.push(time)
            if(stack.length && stack[stack.length - 2] >= stack[stack.length -1] ){
                stack.pop()
            }
            
        }


        console.log("stack", stack)
        return stack.length

    }


}
