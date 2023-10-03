function fibonacciRecursion(n){
    if(n==0){
        return 0
    }
    if(n==1){
        return 1
    }
    return fibonacciRecursion(n-1)+fibonacciRecursion(n-2)

}
console.log(fibonacciRecursion(0))//0
console.log(fibonacciRecursion(1))//1
console.log(fibonacciRecursion(6))//8
