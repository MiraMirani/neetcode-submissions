class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length!==t.length){
            return false;
        }

        let counts = new Map();
        for(let i = 0; i < s.length ; i++) {
            counts.set(s[i], counts.has(s[i])? counts.get(s[i])+1: 1)
            counts.set(t[i], counts.has(t[i])? counts.get(t[i])-1: -1)
        }
        
        for(let el of counts.values()){
            if(el!==0) return false;
        }
        return true;

    }
}
