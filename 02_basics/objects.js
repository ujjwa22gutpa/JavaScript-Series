const sym=Symbol("gupta")
const obj={
    name:'ujjwal',
    age:23,
    [sym]:"gupta",// syntax to declare symbol data type in objects
    "vote":true,  // we can access this only via this syntax  console.log(obj[vote])
    isLoggedIn:true,
    city:'kanpur',
    LastLogInDays:['monday','tuesday']
};
console.log(obj.LastLogInDays)// one way to access the attributes
console.log(obj["LastLogInDays"])// another way to access
console.log(obj[sym]); // syntex to access
// obj.greetings="hello";
// console.log(obj.greetings)
// console.log(obj);


// Objects.freeze(name);
// obj.name="krisshna";

obj.greetings=function(){
    console.log(`"i  am a console" ${this.city}`)
}

console.log(obj.greetings());



