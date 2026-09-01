class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length){
            return false
        }

        const sMap = new Map()
        const tMap = new Map()

        for (let i = 0 ; i < s.length; i++){
            sMap.set(s[i], sMap.has(s[i]) ? sMap.get(s[i])+1 : 1 )
            tMap.set(t[i], tMap.has(t[i]) ? tMap.get(t[i])+1 : 1 )
        }


        for(let i of s){
            if(!tMap.get(i) || tMap.get(i)!== sMap.get(i)){
                return false
            }
        }
        return true


    }
}
