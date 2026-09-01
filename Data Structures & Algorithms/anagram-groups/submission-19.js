class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        const output = [] 
        const map = new Map()
        

        for (const str of strs){
            const sortedStr = str.split("").sort().join("")
            if(!map.has(sortedStr)){
                map.set(sortedStr, [str] )
            }else{
                map.get(sortedStr).push(str)
            }
        } 


        return [...map.values()]
    }

    // isAnagram(s, t){
    //     if(s.length !== t.length){
    //         return false
    //     }
    //     const map = new Map()
    //     for(let i = 0 ; i < s.length ; i++){
    //         map.set(s[i], (map.get(s[i]) || 0) + 1 )
    //         map.set(t[i], (map.get(t[i]) || 0) - 1 )
    //     }
    //     for(const c of map.values()){
    //         if(c!==0){
    //             return false
    //         }
    //     }
    //     return true
    // }
}
