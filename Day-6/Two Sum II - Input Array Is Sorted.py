# https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/submissions/2036561327/
class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        # Initialize two pointers: one at the start, one at the end
        left = 0
        right = len(numbers) - 1
        
        while left < right:
            current_sum = numbers[left] + numbers[right]
            
            # If the sum matches the target, return the 1-indexed positions
            if current_sum == target:
                return [left + 1, right + 1]
            
            # If the sum is too small, move the left pointer to increase the sum
            elif current_sum < target:
                left += 1
                
            # If the sum is too large, move the right pointer to decrease the sum
            else:
                right -= 1