// //searching

//                         //    1) Linear Search
function LinearSearch(arr,target){
      for(let i = 0; i<arr.length;i++){
           if(arr[i]==target) return i
           
      }
      return -1
}
function binarySearch(arr,target){
   let l = 0
   let h = arr.length-1
   while(l<=h){
    let mid = l + Math.floor((h-l)/2)
    if(arr[mid] === target) return mid
    else if(arr[mid] < target) l = mid+1
    else h = mid-1
   }
    return -1
}

function bubbleSort(arr){
    let swapped;
    do{
        swapped =false
        for(let i = 0;i<arr.length-1;i++){
            if(arr[i] > arr[i+1]){
                let temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
                swapped =true
            }
        }
    }while(swapped);
    return arr

}


function insertionSort(arr){
   for(let i = 1;i<arr.length;i++){
    let numToInsert = arr[i]
    let j = i-1
    while(j >= 0 && arr[j] > numToInsert){
        arr[j+1] = arr[j];
        j = j -1
    }
    arr[j+1] = numToInsert
   }
   return arr
}

function quickSort(arr){
    if(arr.length < 2) return arr

    let left = []
    let right = []
    let pivot = arr[arr.length-1]
    for(let i = 0;i<arr.length-1;i++){
        if(arr[i] < pivot) left.push(arr[i])
        else right.push(arr[i])
    }
    return [...quickSort(left) ,pivot,...quickSort(right)]

}

let arr = [8,20,-2,4,-6 ]
// console.log(LinearSearch(arr,4))
// console.log(binarySearch(arr,-2))
// console.log(bubbleSort(arr))
console.log(quickSort(arr))
// console.log(insertionSort(arr))
