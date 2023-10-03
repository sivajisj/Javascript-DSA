var numIdenticalPairs = function(nums) {
    let goodPairs =0
    let map = {}
    for(let num of nums){
        if(map[num]){
            goodPairs+=map[num]
            map[num]++
        }
        else{
            map[num] = 1
        }
    }
   return goodPairs
}

console.log(numIdenticalPairs([1,2,3,1,1,3]))