class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = []

        for(const ch of tokens){
            console.log(stack, "sssttaackkk")

            switch (ch){
                case "+":
                    let a1 = stack.pop()
                    let b1 = stack.pop()
                    stack.push(a1+b1)
                break;

                case "-": 
                    let a2 = stack.pop()
                    let b2 = stack.pop()
                    stack.push(b2-a2)
                break;

                case "*":
                    let a3 = stack.pop()
                    let b3 = stack.pop()
                    stack.push(a3*b3)
                break;

                case "/": 
                    let a4 = stack.pop()
                    let b4 = stack.pop()
                    stack.push(Math.trunc(b4/a4))
                break;

                default: 
                    stack.push(parseInt(ch))
                
                }
                
            console.log(ch)
        }

        return stack.pop()
        
    }
}
