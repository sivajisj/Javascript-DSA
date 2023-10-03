function towerOfHannai(n,fromRod,toRod,usingRod){
    if(n===1){
        console.log(`move disk 1 from ${fromRod} to ${toRod}`)
        return
    }
    towerOfHannai(n-1,fromRod,usingRod,toRod)
    console.log(`move disk ${n} from ${fromRod} to ${toRod}`)
    towerOfHannai(n-1,usingRod,toRod,fromRod)

}
towerOfHannai(4,"A","C","B")