// https://leetcode.com/problems/car-fleet/submissions/2043722646/
/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function (target, position, speed) {
    const cars = [];

    for (let i = 0; i < position.length; i++) {
        cars.push([position[i], speed[i]]);
    }

    cars.sort((a, b) => b[0] - a[0]);

    const stack = [];

    for (let [pos, spd] of cars) {
        const time = (target - pos) / spd;

        stack.push(time);

        if (
            stack.length >= 2 &&
            stack[stack.length - 1] <= stack[stack.length - 2]
        ) {
            stack.pop();
        }
    }

    return stack.length;
};