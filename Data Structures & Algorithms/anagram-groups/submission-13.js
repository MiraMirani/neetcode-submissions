class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let output = []
        let temp ={}

        for(let i = 0; i<strs.length ; i++){
            
            let sortedStr = strs[i].split("").sort().join("")
            if(!temp[sortedStr]) temp[sortedStr] = []
            temp[sortedStr].push(strs[i])
        }



        return Object.values(temp)

    }
}
