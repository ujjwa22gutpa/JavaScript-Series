const arr=[3,33,6,567];
// arr.forEach(function ( val){
//     console.log(val)
// })  for normal function

// arr.forEach((print)=>{
//     console.log(print)
// })  for Arrow function

function user(name){
    //console.log(name)
}

// arr.forEach(user)   when function is already declared

arr.forEach((items,index,arr)=>{
 // console.log(items,index,arr)  we can use multiple values using for each loop
})

const myArr=[
    {
        userName:"ujjwal",
        userId:345
    },
    {
        userName:"divya",
        userId:34590
    },
    {
        userName:"krish",
        userId:34567
    }
]
  
myArr.forEach((items)=>{
    console.log(items.userName)
})
