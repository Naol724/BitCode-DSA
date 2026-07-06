// https://leetcode.com/problems/find-the-duplicate-number/submissions/2058384272/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
    let slow = nums[0];
    let fast = nums[0];

    // Find intersection point
    do {
        slow = nums[slow];
        fast = nums[nums[fast]];
    } while (slow !== fast);

    // Find entrance to the cycle
    let slow2 = nums[0];

    while (slow !== slow2) {
        slow = nums[slow];
        slow2 = nums[slow2];
    }

    return slow;
};