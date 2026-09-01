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

        const splitedS = s.split("")
        const splitedT = t.split("")

        const sMap = new Map()
        const tMap = new Map()

        for (let i = 0 ; i < splitedS.length; i++){

            if(sMap.has(splitedS[i] )){
                const oldSValue = sMap.get(splitedS[i])
                sMap.set(splitedS[i], oldSValue+1 )
            }else{
                sMap.set(splitedS[i], 1 )
            }

            if(tMap.has(splitedT[i] )){
                const oldSValue = tMap.get(splitedT[i])
                tMap.set(splitedT[i], oldSValue+1 )
            }else{
                tMap.set(splitedT[i], 1 )
            }



        }

        console.log(tMap,44444)
        console.log(sMap, 3333333)
        for(let i of splitedS){
            if(!tMap.get(i) || tMap.get(i)!== sMap.get(i)){
                return false
            }
        }
        return true


    }
}
