class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

        let str = s.toLowerCase().replaceAll(" ","")
        let reverse_str = ""
        let modified_str = ""
        for(const el of str){
            if(
                ( "a" <= el && el <= "z") ||
                ( "A" <= el && el <= "Z") ||
                ( "0" <= el && el <= "9") 
            ){
                modified_str+=el
            }
            
        }


        

        for(let i = 0; i < modified_str.length ; i ++){
            reverse_str += modified_str[modified_str.length -i -1]
        }


        return reverse_str === modified_str
    }
}
