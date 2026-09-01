class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        const map = new Map()

        for(const el of strs){

            if(!map.get(this.normalizestr(el))){
                map.set(this.normalizestr(el), [])
            }
            map.set(this.normalizestr(el),[...map.get(this.normalizestr(el), ) , el] )   
        }

        console.log("map", map)
        return [...map.values()]



    }

    normalizestr(str){
        return str.split("").sort().join("")
    }
}
