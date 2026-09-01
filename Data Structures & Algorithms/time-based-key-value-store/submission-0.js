class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }
    // Brute Force

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {

        if(!this.keyStore.has(key)){
            this.keyStore.set(key, new Map())
        }
        if(!this.keyStore.get(key).has(timestamp)){
            this.keyStore.get(key,).set(timestamp,value )
        }
        // this.keyStore.get(key).get(timestamp).push(value)
        console.log("this.keyStore",this.keyStore)

    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if(!this.keyStore.has(key)) return ""
        let seen = 0
        console.log("this.keyStore.get(key).keys()",this.keyStore.get(key).keys())
        for(const time of this.keyStore.get(key).keys()){
            console.log(time,"tii")
            if(time <= timestamp){
                seen = Math.max(seen, time)
            }
        }
        console.log("seen", seen)
        console.log("this.keyStore.get(key).get(timestamp)",this.keyStore.get(key).get(seen), timestamp)
        return seen === 0 ? "" : this.keyStore.get(key).get(seen)
    }
}
