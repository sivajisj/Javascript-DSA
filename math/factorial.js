function factorial(n) {
    if(n==0 || n==1){
        return 1
    }
    return n * factorial(n-1)
    
}
function factorial1(n) {
    let result = 1;
    for (let index = 2; index <= n; index++){
        result *=index
       
    }
    return result
    
}
console.log(factorial(4))