var maximumWealth = function(accounts) {
    let ans= []
    let m = 0
    for(let a of accounts){
        let s = 0
        for(let i = 0;i<a.length;i++){
            s+=a[i]

        }
        ans.push(s)
    }
    for(let n of ans){
        if(n > m){
            m = n
        }
    }
    return m
};
console.log(maximumWealth([[1,2,3],[3,2,1]]));
console.log(maximumWealth([[1,5],[7,3],[3,5]]))
console.log(maximumWealth([[2,8,7],[7,1,3],[1,9,5]]))