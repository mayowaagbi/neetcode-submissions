class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let seen = new Set<number>();
        for(let i=0;i<=nums.length - 1 ;i++){
            if(seen.has(nums[i])){
                return true;
            }else{
                seen.add(nums[i])
            }
        }
             return false;
    }
}
