class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        let hashMap = new Map();
    
        for(let str of strs){
            if(hashMap.has(this.sorter(str))){
                hashMap.get(this.sorter(str)).push(str)
            }else{
                hashMap.set(this.sorter(str), [str])
            }
            
        };

        return [...hashMap.values()]
    }

    sorter (str){
        return str.split("").sort().join("");
    }

    // checkAnagram(s, t){
    //     let hashMap = new Map();
    //     if(t.length !== s.length ) return false
    //     for(let i = 0 ; i < s.length ; i++){
    //         hashMap.set(s[i], (hashMap.get(s[i])?? 0) + 1);
    //         hashMap.set(t[i], (hashMap.get(t[i])?? 0) - 1);
    //     }

    //     for(let el of hashMap.values()){
    //         if(el !== 0) return false;
    //     }
    //     return true;
    // } 
}
