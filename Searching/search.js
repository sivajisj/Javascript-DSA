// // // function linearSearch(arr,target){
// // //     for(let i=0;i<arr.length;i++){
// // //         if(arr[i] == target){
// // //             return i
// // //         }
       
// // //     }
// // //     return -1
// // // }

// // // function binarySearch(arr,target){
// // //     let low = 0
// // //     let high = arr.length-1

// // //     while (low <= high) {
// // //         let mid = low +Math.round( (high - low) / 2);
   
// // //         if (arr[mid] == target)
// // //           return mid;
  
// // //         if (arr[mid] < target)
// // //           low = mid + 1;
  
// // //         else
// // //           high = mid - 1;
// // //       }
  
// // //       return -1;

// // // }

// // function bSearch(arr,target) {
// //     let low = 0
// //     let high = arr.length

// //     while(low<=high){
// //         let mid = low + Math.round((high-low)/2)
// //         if(arr[mid] == target)
// //             return mid
        
// //         else if(arr[mid]<target)
// //             low = mid +1
// //         else
// //             high = mid - 1
        
// //     }
// //     return -1
// // }

// function bSearchR(arr,target,low,high) {
    
//     while(low<=high){
//         let mid = low + Math.round((high-low)/2)
//         if(arr[mid] == target)
//             return mid
        
//         else if(arr[mid]<target)
//             return bSearchR(arr,target,mid +1,high) 
//         else
//             return bSearchR(arr,target,low,mid-1)
        
//     }
//     return -1
// }
// const arr = [-5,2,4,6,10]
// let low = 0
// let high = arr.length
// arr.shift

// const res = bSearchR(arr,42,low,high)
// console.log(`target is found at index ${res}`)

// function lsearch(arr,target){
//     for(let a of arr){
//         if(a===target){
//             return arr.indexOf(a)
//         }
//     }
//     return -1
// }
// // console.log(lsearch( [-5,2,4,6,10],6))

// function bSearch(arr,target,low ,high){
    
//     while(low<=high){
//         let mid  =low +Math.round( (high - low )/2) 
//         if(arr[mid] ===target){
//             return mid
//         }
//         else if(arr[mid] < target){
//             return bSearch(arr,target,mid+1,high)
//         }
//         else{
//             return(arr,target,mid - 1,high)
//         }
//     }
//     return -1
// }
// const arr = [-5,2,4,6,10]
// let low = 0
// let high = arr.length
// console.log(bSearch([-5,2,4,6,10],6,low,high));
// console.log(lsearch([-5,2,4,6,10],6));