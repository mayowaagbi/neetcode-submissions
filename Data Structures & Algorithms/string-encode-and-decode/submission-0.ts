class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let encoded="";
        for(const word of strs){
            encoded+=word.length+"#"+word;
        }
        return encoded

    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let arr:string[]=[]
        let length = "";
        for (let i = 0; i < str.length; i++){
            if(str[i] === "#"){
                arr.push(str.slice(i + 1, i + 1 + Number(length)))
                i+=Number(length)
                length=""
            }
            else{
                length += str[i];
            }
        }
        return arr
    }
}
