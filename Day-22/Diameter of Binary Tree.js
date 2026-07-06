// https://leetcode.com/problems/diameter-of-binary-tree/submissions/2058410554/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
    let diameter = 0;

    function dfs(node) {
        if (node === null) {
            return 0;
        }

        let leftHeight = dfs(node.left);
        let rightHeight = dfs(node.right);

        diameter = Math.max(diameter, leftHeight + rightHeight);

        return 1 + Math.max(leftHeight, rightHeight);
    }

    dfs(root);

    return diameter;
};