class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {

        let profit = 0
        let minPrice = prices[0]

        for( const price of prices ){
            if(price < minPrice){
                minPrice = price
            }

            profit = Math.max(profit, price - minPrice)
        }

        return profit

    }
}
