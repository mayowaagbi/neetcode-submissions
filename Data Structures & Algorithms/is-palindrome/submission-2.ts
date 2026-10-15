class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const arr = s.replace(/[^a-z0-9]/gi,"").toLowerCase();
        var right = arr.length -1;
        var left = 0;
        while (left<right) {
            if(arr[left] !== arr[right]){return false}
            right--
            left++
        }
        return true
    }
}
