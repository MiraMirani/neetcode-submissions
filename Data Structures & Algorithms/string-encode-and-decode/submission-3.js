class Solution {

    encode(strs) {
        let output = ""
        for(const str of strs ){
            output+= str.length + "#" + str
        }
        return output
    }

    // 5#hello8#world453
 decode(str) {
  const output = [];
  let left = 0;

  while (left < str.length) {
    let right = left;

    while (str[right] !== "#") right++;

    const length = parseInt(str.slice(left, right), 10);
    const start = right + 1;
    const end = start + length;

    output.push(str.slice(start, end));

    left = end;
  }

        
        return output
    }
}
