class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        let splited_t = t.split("");
        let splited_s = s.split("");
        let s_map = new Map();
        let t_map = new Map();

        if(splited_s.length !== splited_t.length){
            return false
        }
        for(let el of splited_s){
            if(!s_map.has(el)){
                s_map.set(el, 0)
            }
            s_map.set(el, s_map.get(el) + 1 )
        }

        for(let el of splited_t){
            if(!t_map.has(el)){
                t_map.set(el, 0)
            }
            t_map.set(el, t_map.get(el) + 1 )
        }

        console.log(t_map, s_map)

        for(let [key,val] of s_map){
            if(!s_map.get(key) ||  t_map.get(key) !== val){
                return false;
            } 
        }

        return true;
        
    }
}
