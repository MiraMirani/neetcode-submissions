class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {

        // abc,  acb ,  bac , bca  , cba  , cab  ,
        let sorted_s1 = s1.split("").sort().join("")
        console.log("sorted_s1", sorted_s1)

        for(let i = 0 ; i < s2.length ; i ++){
            // if(s2[i] === sorted_s1[0]){

            // }

                            let right_s2 = s2.substr(i,  s1.length).split("").sort().join("")
                let left_s2 = i - s1.length +1 >= 0 ?  s2.substr (i - s1.length +1, s1.length ).split("").sort().join("") : ""
                if(right_s2 === sorted_s1 || left_s2 === sorted_s1){
                    return true
                }
                console.log("right_s2",right_s2, )
                console.log("left_s2",left_s2)

        }

        return false


    }
}
