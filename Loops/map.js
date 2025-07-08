const nums=[1,2,3,4,5,6,7,8,9];
//  const value=nums.map( function (val){
//   return val*10
// } )
const value=nums
             .map((item)=> item*10)
             .map((item)=> item+1)
             .filter((item)=> item>45)
             .map((item)=> item+40)
console.log(value)