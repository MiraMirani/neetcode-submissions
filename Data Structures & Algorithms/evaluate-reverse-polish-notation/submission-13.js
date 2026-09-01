class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {


        let stack = []
        for(const token of tokens){
            console.log(stack, "sttaackk")

            switch (token){
                case "+":
                    let sum = stack.pop() + stack.pop()
                    stack.push(sum)
                break;

                case "-":
                    let a1 = stack.pop()
                    let b1 = stack.pop()
                    stack.push(b1 - a1)
                break;

                case "/":
                    let a2 = stack.pop()
                    let b2 = stack.pop()
                    stack.push(Math.trunc(b2/a2))

                break;

                case "*":
                    let a3 = stack.pop()
                    let b3 = stack.pop()
                    stack.push(a3*b3)

                break;

                default:
                stack.push(Number(token))
            }
        }

        return stack.pop()


    }
}
