'''
*These are questions i failed on the Mock GCF; Sun Oct 12 2025
*Other leetcode and neetcode material







Problem: Find all the words that start and end with the same letter (case-insensitive). Return how many there are.

What i need to do:
    - Step 1: Split text into words
    - Step 2: Make everything lowercase
    - Step 3: Compare first and last letters

WHY I MESSED UP? ---------------------------> I didnt know that i can still access the first and last elements using numbers
'''

def wordFilter(text):
    # using split() → turns the sentence into a list of words
    clean_text = text.split()
    count = 0

    for word in clean_text:
        allSmall = word.lower()
        if allSmall[0] == allSmall[-1]:
            count = count + 1
        # debug: check lowercase + first letter
        # print(allSmall, "--",allSmall[0])
    return count

text = "Level dEmanND noNe"
# print(wordFilter(text)) # Solution: 2




'''
# Problem: 121. Best Time to Buy and Sell Stock (LeetCode)
    - Im given an array of numbers(prices) where price[i] is the given input and i is the day. I want 
    to buy stock on one day and sell at a later date. RETURN the maximum profit, if none return 0.


-----------------------> E

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

Input: prices = [7,6,4,3,1]
                 ^ ^
                 
                 6-4 = 2
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.





WHY I MESSED UP? ---------------------------> I couldnt figure out what or how to get the index. 
'''
def findMax(prices):
    profit = []
    for i,buy in enumerate(prices, start=1):
        for j in range(len(prices)):
            sell = prices[j]
            

            if buy < sell and j > i:
                profit.append(buy - sell)
                print("sell->",buy,"-","buy->",sell)
    print(profit)
    return max(profit)

prices = [7,1,5,3,6,4] # output: 0
print(findMax(prices))