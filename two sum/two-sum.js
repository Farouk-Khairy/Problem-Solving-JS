// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.


nums = [2, 7, 5, 6, 8, 3, 0, 1];
target = 8;

//Answer

let twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let x = i + 1; x < nums.length; x++) {
            if (nums[i] + nums[x] == target) {
                return [i, x];
            }
        }
    }
};

console.log(twoSum(nums, target))
