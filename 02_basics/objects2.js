const newobj = new Object();
const nobj = {
    email: "some@gmail.com",
    name: {
        fullname: {
            firstname: "ujjwal",
            lastName: "gutpa"
        }
    }
}
// console.log(nobj.name.fullname.lastName);
// console.log(nobj.name.fullname);
// console.log(nobj.name);
// console.log(newobj);

const obj1 = { 1: "a", 2: "b",isLoggedIn:true }
const obj2 = { 3: "c", 4: "d" }
//const obj3= Object.assign({},obj1,obj2);
const obj3 = { ...obj1, ...obj2 }
//  console.log(obj3);


const user = [
    {
        name: "ujjwal",
        id: 123
    },
    {
        name: "ujjwal",
        id: 123
    },
    {
        name: "ujjwal",
        id: 123
    },
]
// console.log(user[1].name);
// console.log(Object.keys(nobj));
// console.log(Object.values(nobj));
// console.log(Object.entries(nobj));
// console.log(nobj.hasOwnProperty('name'))
// console.log(obj1.hasOwnProperty('isLoggedIn'))

const users={
    userName:"ujjwal",
    userId:435,
    userAge:23
}

//console.log(users.userName)

// Destructuring of objects

const {userName:n,userAge:a}=users;
console.log(`first ${n} and second ${a}`);