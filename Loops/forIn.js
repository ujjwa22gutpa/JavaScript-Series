
const myObject={
    name:"ujjwal",
    sec:"c",
    rollno:2207190100127

}
// for objects
for (const key in myObject) {
   // console.log(`${key} is for ${myObject[key]}`)
}

// for arrays

const myArr=[3,4,2,5,2,42,43];
for (const key in myArr) {
    console.log(`${key} is for ${myArr[key]}`)
}

// Maps is not iterable from for in loop