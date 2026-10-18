class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        var left = 0;
        var right = numbers.length - 1;
        while (left < right) {
            var sum = numbers[left] + numbers[right];
            if (sum === target) {
                return [left + 1, right + 1];
            }
            if (sum > target) {
                right--;
            } else if (sum < target) {
                left++;
            }
        }
    }
}
