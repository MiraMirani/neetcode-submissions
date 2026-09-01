class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {

        if(s1.length > s2.length){
            return false
        }

        for( let i = 0 ; i < s2.length; i++){
            let p_s2 = s2.substr(i, s1.length)

            if(p_s2.length < s1.length){
                return false
            }
            console.log("p_s2",p_s2)
            if(this.checkAnagram(s1, p_s2)){
                return true
            }
            
        }
        return false

    }

    checkAnagram(s1, p_s2){
        if(s1.length !== p_s2.length){
            return false
        }
        let map = new Map()
         
        for(let i = 0 ; i < s1.length; i++){
            map.set(s1[i],  (map.get(s1[i]) || 0)+ 1  )
            map.set(p_s2[i],  (map.get(p_s2[i]) || 0) - 1  )
        }

        for(const el of map.values()){
            if(el!== 0 ){
                return false
            }
        }

        return true
    }
}
