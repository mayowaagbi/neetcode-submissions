class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const map = new Map();
        for(let i=0;i<nums.length;i++){
            const num = target - nums[i];
            if(map.has(num)){
                return [ i , map.get(num)]
            }
            map.set(nums[i], i);
        }
    }
}
