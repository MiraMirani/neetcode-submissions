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

        const map = new Map()
        for(let i = 0 ; i < s.length ; i++){
            console.log(s[i], "s[i]")
            map.set(s[i] , (map.get(s[i]) || 0) +1)
            map.set(t[i] , (map.get(t[i]) || 0) - 1)
        }
        console.log(map, "mmmaaappp")
        for(const c of map.values()){
            if(c!==0){
                return false
            }
        }
        return true

    }
}
