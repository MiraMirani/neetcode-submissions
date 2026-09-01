class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {

        let sorted_s1 = s1.split("").sort().join("")
        for(let i = 0 ; i < s2.length ; i ++){
            let right_s2 = s2.substr(i,  s1.length).split("").sort().join("")
            if(right_s2 === sorted_s1 ){
                return true
            }
        }

        return false


    }
}
