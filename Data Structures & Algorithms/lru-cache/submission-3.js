class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity
        this.cach = []

    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
                console.log("temp", this.cach)

        for(let i = 0 ; i < this.cach.length ; i++){
            if(this.cach[i][0] === key){
                let temp = this.cach.splice(i, 1)[0]
                this.cach.push(temp)
                return temp[1]
            }
        }

        return -1


    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {

        for(let i = 0; i < this.cach.length ; i++){
            if(this.cach[i][0] === key) {
                this.cach.splice(i, 1)
                this.cach.push([key, value])
                return
            }
        }


        if ( this.cach.length === this.capacity ) {
            this.cach.shift()
        }

        this.cach.push([key, value])
    }
}
