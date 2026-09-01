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
            counts.set(s[i],(counts.get(s[i])?? 0)+1)
            counts.set(t[i],(counts.get(t[i])?? 0)-1)
        }

        console.log(counts, "countscounts")
        
        for(let el of counts.values()){
            if(el !== 0) return false;
        }
        return true;

    }
}
