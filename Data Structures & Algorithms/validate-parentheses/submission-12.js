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

        const output = []

        for(const ch of s){

            // console.log("333",map.get(ch),ch)
            if( map.has(ch) ){

                                    

                console.log(ch, "5555", )
                if(output.pop() !== map.get(ch)){
                    return false

                }
                // return false

            }else{
                output.push(ch)
                // console.log("3333", ch)
            }
        }

    console.log("output",output)


    return output.length === 0



    }
}
