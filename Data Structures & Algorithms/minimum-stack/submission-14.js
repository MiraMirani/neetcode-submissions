class MinStack {
    constructor() {
        this.stack = []
        this.minStack = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val)
            console.log("vvv", val, "this.",this.minStack[this.minStack.length -1])

        if(this.minStack.length ){
            console.log("+++")

            let min = Math.min(
                val ,(this.minStack[this.minStack.length -1] )
            )
            this.minStack.push(min)
        }else{
            console.log(888888)
            this.minStack.push(val)
        }

        console.log(this.minStack, "thisMinStack")

    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop()
        this.minStack.pop()
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[this.minStack.length - 1]
    }
}

