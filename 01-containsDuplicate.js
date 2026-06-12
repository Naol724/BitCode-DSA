// https://leetcode.com/problems/contains-duplicate/submissions/2030909191/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    return new Set(nums).size !== nums.length;
};