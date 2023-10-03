var smallerNumbersThanCurrent = function(nums) {
    let ans = []
    for(let a of nums){
        let   c = 0
        for(let b of nums){
          
            if(b<a){
                c+=1
            }
        }
        ans.push(c)
    }
    return ans
   
};
console.log(smallerNumbersThanCurrent( [8,1,2,2,3]))