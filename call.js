function add(a,b,fun){
    let sum=a+b
    fun(sum)
}

add(2,3,function(k){
    console.log(`addition is ${k}`)
})

function printSum(n){
    console.log("The sum is",n)
}
add(2,3,printSum)
// function add2(a,b){
//     let sum=a+b
//     console.log(`addition is ${sum}`)
// }

// function add3(a,b){
//     let sum=a+b
//     console.log(`${a}+${b} is ${sum}`)
// }

// add(2,3)
// add2(2,3)
// add3(2,3)