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

        const count = new Map()

        for (let i = 0 ; i < s.length; i++){
            count.set(s[i], count.has(s[i]) ? count.get(s[i])+1 : 1 )
            count.set(t[i], count.has(t[i]) ? count.get(t[i])-1 : -1 )
        }

    console.log(count,333333)

        for (let i of count.values()){
            if(i!==0){
                return false
            }
        }
        return true


    }
}
