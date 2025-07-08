// const user={
//     username:"ujjwal",
//     salary:90000,
//     hellomessage:function(){
//         console.log(`${this.username} and ${this.salary}`)
//         console.log(this)
//     },
// }
// user.hellomessage();
// user.username="krish"
// user.hellomessage();
// console.log(this)


// function biscuit(){
//      name:"ujjwal";
//     console.log(this.name);
// }
// biscuit();


// const biscuit= function(){
//       name:"ujjwal";
//     console.log(this);
// }
// biscuit();

// const biscuit =() =>{
//           name:"ujjwal";
//     console.log(this);   //  {}
// }

// biscuit();


// const addtwo=(num1,num2)=>{
//   return num1+num2;
// }

// console.log(addtwo(2,3));

// const addtwo=(num1,num2)=> num1-num2

//   addtwo(10,3);


//   const addtwo=(num1,num2)=> (num1+num2);
// console.log(addtwo(5,7));


// const returnobj=()=>({username:"ujjwal"})
// console.log(returnobj())




//+++++++++++++IIFE(Immediatley Invoked function Expression)+++++++++///
  (function chai(){
    //Named IIFE
   console.log("hello!!!") 
  })();

  ( (name) => {
    //Unnnamed IIFE
    console.log(`my name is ${name}`)
  })('ujjwal');

const addtwo = ((num1, num2) => {
  return num1 + num2;
})(3, 5);

console.log(addtwo); // Output: 8


