var kidsWithCandies = function(candies, extraCandies) {
   return candies.map(ele => ele+extraCandies >= Math.max(...candies))
    
};

console.log(kidsWithCandies([2,3,5,1,3],3))