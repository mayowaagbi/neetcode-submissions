class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const signature = new Map<string, string[]>();
        const arrayOfMaps = strs.map((word) => {
            const map = new Map();
            for (const letter of word) {
                if (map.has(letter)) {
                    map.set(letter, map.get(letter)! + 1);
                } else {
                    map.set(letter, 1);
                }
            }
            return map;
        });
        for (let i = 0; i < arrayOfMaps.length; i++) {
            const sign = arrayOfMaps[i];
            const word = strs[i];
            let unique = "";
            const sortedEntries = [...sign].sort((a, b) => a[0].localeCompare(b[0]));
            for (const [key, value] of sortedEntries) {
                unique += `${key}${value}`;
            }
            if (signature.has(unique)) {
                signature.get(unique)!.push(word);
            } else {
                signature.set(unique, [word]);
            }
        }
        return [...signature.values()];
    }
}
