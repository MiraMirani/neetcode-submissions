class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {

        const stack = []
        const closingMap = new Map([
            ["]", "["], 
            [")", "("], 
            ["}", "{"]
            ])

        for(const el of s){
            if(!closingMap.has(el)){
                stack.push(el)
            } else if(stack.pop() !== closingMap.get(el)){
                return false
            }
        }
        return stack.length === 0
    }
}
