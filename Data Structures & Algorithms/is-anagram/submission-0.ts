class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const frequency= new Map<string , number>();

        for(const si of s){
            if(!frequency.has(si)){
                frequency.set(si, 1);
            }else{
              frequency.set(si ,frequency.get(si)! + 1 )
            }
            
        }
        for(const ti of t){
            if(frequency.has(ti)){
                frequency.set(ti ,frequency.get(ti)! - 1 )
            }else{
              return false
            }
        }

        for(const count of frequency.values()){
            if (count !== 0){
                return false
            }
        }
        return true
        
    }
}
