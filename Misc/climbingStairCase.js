function climbingStairCase(n){
    const numOfWays = [1,2]
    for (let index = 2; index < n; index++) {
        numOfWays[index] = numOfWays[index-1]  + numOfWays[index-2]
        
    }
 return numOfWays[n-1]
}

console.log(climbingStairCase(2))
console.log(climbingStairCase(1))
console.log(climbingStairCase(3))
console.log(climbingStairCase(4))