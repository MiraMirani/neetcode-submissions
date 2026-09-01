class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {



        const stack = []


        for (const ch of tokens ){
           
            switch(ch){
                case "+":
                    stack.push(
                        stack.pop() + stack.pop()
                    )
                    break;
                case "-":{
                let a = stack.pop()
                let b = stack.pop()
                    stack.push(
                        b - a
                    )
                    break;}
                case "*":
                    stack.push(
                        stack.pop() * stack.pop()
                    )
                    break;
                case "/":
      {              let a = stack.pop()
                    let b = stack.pop()
                    stack.push(
                        Math.trunc(
                            b /a
                        )
                    )
                    break;}
                default: 
                    stack.push(parseInt(ch))
            }

            console.log(stack, "stacckkkk")
        }

        return stack.pop()

    }
}
