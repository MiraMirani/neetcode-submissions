class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {

        const map = new Map(
            [["}","{"],
            [")","("],
            ["]","["],]
            )

        const stack = []

        for(const ch of s){

            // console.log("333",map.get(ch),ch)
            if( map.has(ch) ){
                if(stack.pop() !== map.get(ch)){
                    return false
                }

            }else{
                stack.push(ch)
                // console.log("3333", ch)
            }
        }

    console.log("output",stack)


    return stack.length === 0



    }
}
