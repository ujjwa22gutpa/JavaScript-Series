// const promiseOne=new Promise((resolve,reject)=>{
//     setTimeout((val)=>{
//        console.log("Async function is done")
//        resolve()
//     },1000);
// })

// promiseOne.then(function (){
//     console.log("work done")
// }
// )


//  new Promise((resolve,reject)=>{
//     setTimeout(function (val){
//        console.log("Async two is done")
//        resolve()
//     });
//  }).then(function (){
//     console.log("work done")
//  }
//  )

//   new Promise((resolve,reject)=>{
//     setTimeout(function (val){
//        console.log("Async two is done")
//        resolve({
//         name:"ujjwal",
//         email:"krish@example.com"
//        })
//     });
//  }).then( function (user){
//       console.log(user)

//  })

// new Promise((resolve,reject)=>{
//    let execute = (2==2);
//   //  let execute = (2!=2);
//     if(execute){ 
//         resolve({
//             username:"krishna",
//             id:2345
//         });
//     }else{
//         console.log("something went wrong")
//     }
// })
// .then((user)=>{
//     console.log(user);
//     return user.username;
// })
// .then((name)=>{
//     console.log(name)
// })
// .catch((err)=>{
//     console.log(err)
// })
// .finally(()=> console.log("promise is either resolve or reject"))
// // it will always execute

//   const promiseFive=new Promise((resolve,reject)=>{
//   // let execute = (2==2);
//     let execute = (2!=2);
//     if(execute){ 
//         resolve({
//             username:"krishna",
//             id:2345
//         });
//     }else{
//         reject("something went wrong")
//     }
// }).finally(()=> console.log("resolve or reject"))

// async function userData(){
//   try {
//     const udata=await promiseFive;
//     console.log(udata)
    
//   } catch (err) {
//       console.log(err)
//   }
// }
// userData();



// async function userdata(){
//     try {
//         const data=  await fetch('https://jsonplaceholder.typicode.com/users')
//         const jsondata=await data.json()
//         console.log(jsondata)
//     } catch (error) {
//         console.log('E=>',error)
//     }
// }
// userdata();


// fetch('https://jsonplaceholder.typicode.com/users')
// .then((userdata)=>{
//     return   userdata.json(userdata);
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((error)=>{
//    console.log(error)
// })


function userLogin(username,email){
    return new Promise((resolve,reject)=>{
        setTimeout((e)=>{
            const  userName = 'ujjwal gupta';
        const Email='ujjwal@gmail.com'
        if(username === userName && email === Email){
            resolve(`user name ${username} and email ${email} is correct`)
        }
        else{
            reject(`user name ${username} and email ${email} is incorrect`)
        }
        },2000);
    });
};

// userLogin('ujjwal gupta','ujjwal@gmail.com')
// .then((message)=>{
//     console.log(message)
// })
// .catch((err)=>{
//     console.log(err)
// })

async function login() {
  try {
     const udata= await userLogin('ujjwal','ujjwalgupta')
     console.log(udata)
  } catch (error) {
    console.log(error)
  }
}
login()









