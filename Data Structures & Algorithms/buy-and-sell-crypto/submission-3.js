class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {

        let maxProfit = 0
        let minBuy = prices[0]
        
        for (const sell of prices){
            maxProfit = Math.max(maxProfit , sell- minBuy)
            minBuy = Math.min(minBuy, sell)
            
            // maxProfit = Math.max(maxProfit, profit)

        }


        return maxProfit

    }
}
