class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        let map = new Map()

        this.dfs(candidates.sort((a, b)=>a-b), target, 0, 0, [], map)
        console.log("map",map.values())

        return [...map.values()]

    }

    dfs(candidates, target, i, sum, temp, map){
        if(sum === target) {
            let isExist  = map.has(JSON.stringify(temp))
            if( !isExist){
                return map.set(JSON.stringify(temp), [...temp])
            }

            }

            

        if(i >= candidates.length || sum >= target ){
            // console.log("hiii", sum >= target)
            return 
        }

        temp.push(candidates[i])
        this.dfs(candidates, target, i+1, sum+candidates[i], temp, map)
        temp.pop(candidates[i])
        this.dfs(candidates, target, i+1, sum, temp, map)



    }
}
