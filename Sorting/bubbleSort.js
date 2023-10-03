function bubbleSort(arr){
    return (arr || []).sort(function(a,b){
       return a-b
    } )
}
let arr = [-6,20,8,-2,4]
let arr2 = [-2,-3,100,44,33,22,11,10,1]
let arr3  = [1,2,3,4,5,6,7,-1,-2,-3]
console.log(bubbleSort(arr))
console.log(bubbleSort(arr2))
console.log(bubbleSort(arr3))

