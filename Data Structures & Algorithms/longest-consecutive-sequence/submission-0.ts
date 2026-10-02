class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const set = new Set(nums);
        var current = 0;
        var longest = 0;
        for (let i = 0; i <= nums.length - 1; i++) {
            var value = nums[i];
            current = 1;
            if (!set.has(value - 1)) {
                while (set.has(value + 1)) {
                    current += 1;
                    value += 1;
                }
                if (current >= longest) {
                    longest = current;
                }
            }
        }
        return longest;
    }
}
