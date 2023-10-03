function quickSort(arr){
      if (arr.length < 2) return arr

      let pivot = arr[arr.length-1]
      let left = []
      let right = []
      for(let i = 0; i<arr.length-1; i++){
        if(arr[i] < pivot) left.push(arr[i])
        else right.push(arr[i])
      }
      return [...quickSort(left),pivot,...quickSort(right)]
}
let arr = [-6,20,8,-2,4]
let arr1 = [345,22,10,-4,-5,-1,0]
console.log(quickSort(arr))
console.log(quickSort(arr1))