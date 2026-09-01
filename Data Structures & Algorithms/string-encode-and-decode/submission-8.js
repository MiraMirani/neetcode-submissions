class Solution {

    encode(strs) {
        let output = ""
        for(const str of strs ){
            output+= str.length + "#" + str
        }
        return output
    }

    decode(str) {
        const output = [];
        let index = 0
        while(index < str.length){
            let j = index
            while(str[index]!=="#"){
                index++
            }
            const length = Number(str.substring( j, index))
            console.log("lengthlength", length, index)

            const start = index + 1
            const end = start + length 
            
            const piece = str.substring(start, end)
            output.push(piece)
            index = end
            

        }
        return output
    }
}
