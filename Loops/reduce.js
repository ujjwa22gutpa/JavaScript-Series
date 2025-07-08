const nums=[1,2,3]
// const value=nums.reduce(function (acc,currVal){
//     console.log(`${acc} and ${currVal}`)
// return acc*currVal
// },1)

// const value=nums.reduce((acc,curr)=> ( acc+curr ),0)

// console.log(value)


const myCart=[
    {
        itemName:"sunglasess",
        Price: 599
    },
    {
        itemName:"shoes",
        Price: 2999
    },
    {
        itemName:"SS bat",
        Price: 9999
    }
]

const totalPrice=myCart.reduce((acc,item)=> (acc+item.Price),0)
console.log(`the total price of all the items is ${totalPrice}`)