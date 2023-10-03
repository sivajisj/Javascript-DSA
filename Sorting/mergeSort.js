function mergeSort(arr){
    if (arr.length < 2) return arr

    let mid = Math.floor(arr.length/2)
    let left = arr.slice(0,mid)
    let right = arr.slice(mid)
   return merge(mergeSort(left),mergeSort(right))
}

function merge(leftArr,rightArr)
{
   const sortedArr = []
   while(leftArr.length && rightArr.length){
        if(leftArr[0] < rightArr[0]){
            sortedArr.push(leftArr.shift())
        }else{
            sortedArr.push(rightArr.shift())
        }
   }
   return [...sortedArr,...leftArr,...rightArr]
}
let arr = [-6,20,8,-2,4]
// let arr1 = [345,22,10,-4,-5,-1,0]
console.log(mergeSort(arr))
// console.log(mergeSort(arr1))