function loginUserMessage(username){
    if(!username){
        console.log("please enter a username")
        return
    }
    else{
   return `${username} just logged in!`
}
}

// console.log(loginUserMessage(""))
// console.log(loginUserMessage("divu"))
// console.log(loginUserMessage())


// rest operator

// function Addcart(val1,val2 ,...items){
//     return items
// }
 
function Addcart(val1,val2 ,...items){
    return items
}

//console.log(Addcart(299,345,120,566,799))


//passing objects in  a function

function handlingObjects(obj){
    console.log(`username is ${obj.username} and the price is ${obj.price}`)
}

// direct passing object
// handlingObjects({
//     username:"divya",
//     price:1000000000
// })

//indirect passing objects

const user={
        username:"divya",
    price:1000000000
}

//handlingObjects(user)


//passing array 

function handlingArray(arr){
    return  arr[3]
}

// const newarr=[23,65,78,5,24,56,8];
// console.log(handlingArray(newarr));

console.log(handlingArray([23,4,5,765,6,4,5]));