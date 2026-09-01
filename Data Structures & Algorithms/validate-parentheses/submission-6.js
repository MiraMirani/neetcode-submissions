class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if(s.length %2 !==0){
            return false
        }


        while(        s.includes("()") ||
        s.includes("[]") ||
        s.includes("{}")){
            s= s.replace("()", "")
            s= s.replace("{}", "")
            s= s.replace("[]", "")  
        }


        return !s

    }
}
