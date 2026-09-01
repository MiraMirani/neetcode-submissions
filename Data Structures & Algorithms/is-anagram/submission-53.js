class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        if(s.length !== t.length) return false;


        let counts = new Map();

        for(let el of s) counts.set(el, counts.has(el) ? counts.get(el) + 1 : 1)

        for(let el of t){
            let n = counts.get(el)

            if(!n){
                return false;
            }else{
                counts.set(el, counts.get(el) - 1)
            }
        } 
        console.log(counts,"counts")

        return true;
        
    }
}
