const userEmail='ujj@gmail.com';
const userName=[]
if(userEmail && userName.length===0){
    console.log('got the user mail')
} else{
    console.log('do not have a user mail')
}

//falsy values
// 0,flase,-0,0n,"",null ,undefind,NaN

//turthy values
// "0","false"," ",[],{},function (){}

const user={}
if(Object.keys(user).length=== 0){
    console.log('Object is empty')
}