# https://leetcode.com/problems/valid-palindrome/submissions/2036555811/
class Solution:
    def isPalindrome(self, s: str) -> bool:
        # Initialize two pointers at the start and end of the string
        left, right = 0, len(s) - 1
        
        while left < right:
            # Move the left pointer forward if the character is not alphanumeric
            while left < right and not s[left].isalnum():
                left += 1
            # Move the right pointer backward if the character is not alphanumeric
            while left < right and not s[right].isalnum():
                right -= 1
            
            # Compare the characters in lowercase
            if s[left].lower() != s[right].lower():
                return False
            
            # Move both pointers inward
            left += 1
            right -= 1
            
        return True