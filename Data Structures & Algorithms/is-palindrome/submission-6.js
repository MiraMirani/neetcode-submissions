class Solution {
 isPalindrome(s) {
    let convertedS = s.toLowerCase().replaceAll(" ", "").split("").filter(el=> this.isAlphanumeric(el)).join("")
    let reversedS = s.toLowerCase().replaceAll(" ", "").split("").reverse().filter(el=> this.isAlphanumeric(el)).join("")
    return convertedS === reversedS
}

    isAlphanumeric(char) {
        return (char >= 'a' && char <= 'z') || 
               (char >= 'A' && char <= 'Z') || 
               (char >= '0' && char <= '9');
    }

}
