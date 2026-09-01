class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s1.length > s2.length){
            return false
        }

        const s1Array = new Array(26).fill(0)
        const s2Array = new Array(26).fill(0)
        for(let i = 0 ; i < s1.length ; i++){
            s1Array[s1[i].charCodeAt() - 97]++
            s2Array[s2[i].charCodeAt() - 97]++

        }
        let matches = 0
        for(let i = 0 ; i < 26; i++){
            if(s1Array[i]=== s2Array[i]) matches++
        }

        let r = s1.length
        let l = 0

        while(r < s2.length){
            if(matches === 26){
                return true
            }


            let index = s2[r].charCodeAt() - 97
            s2Array [index]++
            if(s2Array [index] === s1Array[index]){
                matches++
            }else if(s2Array [index]-1 === s1Array[index]){
                matches--
            }

            index = s2[l].charCodeAt() - 97
            s2Array [index]--
            if(s2Array[index] === s1Array[index]){
                matches++
            }else if(s2Array[index]+1 === s1Array[index]){
                matches--
            }
            r++
            l++
        }


        return matches === 26

    }
}
