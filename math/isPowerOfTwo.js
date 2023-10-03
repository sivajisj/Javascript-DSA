// function isPO2(n) {
//     if (n<1){
//         return false
//     }
//     while(n>1){
//         if(n % 2!==0){
//            return false
//         }
//        n=n/2
//     }
//     return true
// }
function isPO2(n) {
    if (n<1){
        return false
    }
    return (n & (n-1)) ===0
}
console.log(isPO2(2))//true
console.log(isPO2(4))//true
console.log(isPO2(8))//true
console.log(isPO2(5))//false