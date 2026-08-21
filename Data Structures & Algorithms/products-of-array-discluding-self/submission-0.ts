class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        let left = [];
        let right = [];
        let output=[];
        let leftProduct = 1;
        let rightProduct = 1;
        for (let i = 0; i <= nums.length - 1; i++) {
            left.push(leftProduct);
            leftProduct *= nums[i];
        }
        for (let j = nums.length - 1; j >= 0; j--) {
            right[j]=rightProduct;
            rightProduct *= nums[j];
        }
        for(let k=0; k <= nums.length - 1; k++){
            output[k]=right[k] *left[k]
        }
        return output
    }
}
