class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        const res = {};
        for(let str of strs){
            let sortedString 
            if(str ===""){
                sortedString = ""
            }else{
                sortedString = str.split("").sort().join("")
            }

            if(sortedString || str === ""){
                if(!res[sortedString]){
                    res[sortedString] = []
                }
                res[sortedString].push(str)
                
            }
        }

        return Object.values(res)

    }
}
