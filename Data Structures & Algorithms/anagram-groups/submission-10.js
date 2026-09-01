class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
        groupAnagrams(strs) {
        const res = {};
        for (let s of strs) {
            const count = new Array(26).fill(0);
            for (let c of s) {
                count[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
            }
            const key = count.join(',');
            if (!res[key]) {
                res[key] = [];
            }
            res[key].push(s);
        }
        return Object.values(res);
    }
    groupAnagramsV2(strs) {

        const output = []
        for(let i = 0 ; i < strs.length; i++){
            let temp = new Set()
            for(let j = 0 ; j < strs.length ; j++ ){
                let check = this.checkAnagaram(strs[i], strs[j])
                const dublicationPrevent = this.duplicationCheck(output, strs[j])
                console.log(strs[i], strs[j],3333, check, dublicationPrevent)
           
                // if(i===j )
                if(check && dublicationPrevent ){
                    console.log("")
      
                    if(i !==j && strs[i] === strs[j]){
                        output.push([ strs[i], strs[i]])
                    }else if(i==j && strs[i] === strs[j]){
                        
                    }  else{
                        temp.add(strs[i])
                        temp.add(strs[j])
                    }
                }
            }

            if([...temp].length){
                output.push([...temp]) 
            }
        }


        return output  
    }

    checkAnagaram( str1, str2 ){
        // if (!str1 || !str2) return false
        if(str1.length !== str2.length) return false

        const modifiedStr2 = str2.split("")
        const modifiedStr1 = str1.split("")
        
        for(let i = 0; i< modifiedStr1.length; i++){
            let check = modifiedStr2.find(el=> el === modifiedStr1[i])
            if(!check) return false
        }
        return true
    }

    duplicationCheck(arr, str){

        if(!arr || !arr.length ){
            return true
        }
        for(let subArr of arr){
            for(let el of subArr){
                if(el === str && el && str){
                    return false
                }
            }
        }
        return true
    }
}
