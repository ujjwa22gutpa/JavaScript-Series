const myarr=[1,2,3,4,5,6];
// const value=myarr.forEach((item)=>{
//      console.log(item)
// })
//for each loop does not return anything
// console.log(value)


//  const nums=myarr.filter((item)=>{
//     return item>4;
// })
// console.log(nums)

// const nums=myarr.filter((item)=> item>4 )
// console.log(nums)

// const arr=[]
// const nums=myarr.forEach((item)=>{
//    if(item>4){
//     arr.push(item)
//    }
// })

// console.log(arr)





const users = [
  {
    id: 1,
    name: "Ujjwal Gupta",
    age: 23,
    gender: "male",
    city: "Kanpur",
    skills: ["JavaScript", "React", "Node.js"],
    isEmployed: true,
    salary: 90000
  },
  {
    id: 2,
    name: "Priya Singh",
    age: 25,
    gender: "female",
    city: "Delhi",
    skills: ["Python", "Django", "SQL"],
    isEmployed: false,
    salary: 0
  },
  {
    id: 3,
    name: "Ravi Kumar",
    age: 30,
    gender: "male",
    city: "Mumbai",
    skills: ["Java", "Spring Boot", "MongoDB"],
    isEmployed: true,
    salary: 120000
  },
  {
    id: 4,
    name: "Anjali Mehra",
    age: 22,
    gender: "female",
    city: "Bangalore",
    skills: ["HTML", "CSS", "JavaScript"],
    isEmployed: false,
    salary: 0
  },
  {
    id: 5,
    name: "Arjun Verma",
    age: 28,
    gender: "male",
    city: "Kanpur",
    skills: ["C++", "Python", "Machine Learning"],
    isEmployed: true,
    salary: 150000
  }
];
// const employedUsers = users.filter((item)=> item.isEmployed);
// console.log(employedUsers);
//  const employedUsers = users.filter((item)=> item.city === 'Kanpur');
// console.log(employedUsers);
//  const employedUsers = users.filter((item)=> item.salary>100000);
// console.log(employedUsers);

 const employedUsers = users.filter((item)=> item.gender === 'female');
console.log(employedUsers);