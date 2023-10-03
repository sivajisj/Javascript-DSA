var createTargetArray = function(nums, index) {
    let target = []
    for(let i=0 ; i<nums.length;i++){
        target.splice(index[i],0,nums[i])
       
    }
    return target 
};

console.log(createTargetArray( [0,1,2,3,4],[0,1,2,2,1]))



// // arr.splice(2,0,i)
// let target = [0]
// target.slice(0,0,0)
// target.
// console.log(target)