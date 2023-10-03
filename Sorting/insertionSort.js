function insertionSort(arr){
   for(let i = 1; i<arr.length; i++){
    let nToInsert = arr[i]
    let j = i -1
    while(j >=0 && arr[j] > nToInsert){
        arr[j+1] = arr[j]
        j = j-1
    }
    arr[j+1] = nToInsert
   }
   return arr
}
arr = [8,20,-2,4,-6 ]
console.log(insertionSort(arr))