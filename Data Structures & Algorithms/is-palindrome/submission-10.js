class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

        let str = ""
        for(let i = 0; i < s.length; i ++){
            if(
                ( "a" <= s[i] && s[i] <= "z") ||
                ( "A" <= s[i] && s[i] <= "Z") ||
                ( "0" <= s[i] && s[i] <= "9") 
            ){
                str+=s[i].toLowerCase()
            }
            
        }
        console.log("str",str)

        for(let i = 0; i < str.length ; i ++){
            if(str[i] !== str[str.length-1-i]) return false
        }


        return true
    }
}
