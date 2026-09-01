class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let group = {}
        for(let i = 0 ; i < strs.length ; i++){
            if(!group[strs[i]?.split("")?.sort()]){
                group[strs[i]?.split("")?.sort()] = []
            }
            group[strs[i]?.split("")?.sort()].push(strs[i])
        }
        return Object.values(group)

    }
}
