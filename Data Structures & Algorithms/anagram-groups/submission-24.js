class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = []

        for(let i = 0 ; i < strs.length ; i++){
            const grouped = []
            for(let j = i + 1 ; j < strs.length ; j++){
                if(this.anagramChecker(strs[i], strs[j])){
                    grouped.push(strs[j], )
                    strs.splice(j, 1)
                    j--
                }    
            }
            grouped.push(strs[i], )
            strs.splice(i, 1)
            i--
            res.push([...grouped])


        }


        return [...res]

        
    }

    anagramChecker(s , t){

        if( s.length !== t.length ){
            return false
        }

        const map = new Map()
        for(let i = 0 ; i < s.length ; i++){
            map.set(s[i], (map.get(s[i]) || 0) + 1  )
            map.set(t[i], (map.get(t[i]) || 0) - 1  )
        }

        for(const el of map.values()){
            if(el!==0){
                return false
            }
        }
        return true

    }
}


const temp = new Solution()

const strs = ["act","pots","tops","cat","stop","hat"]

const response = temp.groupAnagrams(strs)