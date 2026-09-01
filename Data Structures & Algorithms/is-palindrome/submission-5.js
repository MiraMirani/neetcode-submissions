class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

        let modifiedS = ""
        for(let char of s ){
            if(this.isAlphanumeric(char)){
                modifiedS += char
            }
        }

        let reversedString = modifiedS.toLocaleLowerCase().split("").reverse().join("")
        let joinedString = modifiedS.toLocaleLowerCase().split("").join("")
    
        return joinedString === reversedString
    }

    isAlphanumeric(char){
        const check =       
        (char >= "a" && char <= "z") ||
        (char >= "0" && char <= "9") ||
        (char >= "A" && char <= "Z")

        return check

    }
}
