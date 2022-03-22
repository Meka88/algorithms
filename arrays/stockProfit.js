//You are given an array prices where prices[i] is the price of a given stock on the ith day.

//You want to maximize your profit by choosing a single day to buy one stock and choosing a 
//different day in the future to sell that stock.

//Return the maximum profit you can achieve from this transaction. If you cannot achieve any 
//profit, return 0.
// For Example:
// prices=[3,4,1,6]
// min=1
// max=6
// profit=max-min=5 which is correct 
// in this Example:
// prices = [7,6,4,3,1]
// min = 1 price at day 6
// max = 7 price at day 1
// max_profit = 7-1 = 6 u can think like this but you can buy the stock at day 6 and sell it at day 1.

const maxProfit = (prices) => {
    let left = 0; // Buy
    let right = 1; // sell
    let max_profit = 0;
    while (right < prices.length) {
      if (prices[left] < prices[right]) {
        let profit = prices[right] - prices[left]; // our current profit
  
        max_profit = Math.max(max_profit, profit);
      } else {
        left = right;
      }
      right++;
    }
    return max_profit;
  };

let prices = [7,6,4,3,1] 
