

function cartisian(A,B){

const big = []
for(let i = 0;i < A.length;i++){

   for(let j = 0;j < B.length;j++){
      big.push([A[i],B[j]])

         }
  
     }
return big
}

const A = [1,2]
const B = [3,4]
console.log(cartisian(A,B))