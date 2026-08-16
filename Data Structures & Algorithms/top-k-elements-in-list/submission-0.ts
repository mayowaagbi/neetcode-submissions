class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const map = new Map<number, number>();
        const bucket = [];
        let result = [];
        for (const i of nums) {
            if (map.has(i)) {
                map.set(i, map.get(i)! + 1);
            } else {
                map.set(i, 1);
            }
        }
        for (const [num, count] of map) {
            if (!bucket[count]) {
                bucket[count] = [];
            }
            bucket[count].push(num);
        }
        for (let j = bucket.length - 1; result.length < k; j--) {
            if (bucket[j]) {
                for (const n of bucket[j]) {
                    result.push(n);
                }
            }
        }

        return result;
    }
}
