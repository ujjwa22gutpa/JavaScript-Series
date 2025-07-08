const numbers=[2,3,4,5,6,4,3]
for (const num of numbers) {
    //console.log(num)
}

const str="hey I am Ujjwal gupta"
for (const char of str) {
    if(char===" "){
        continue;
    }
   // console.log(`char of : ${char}`)
}

const map =new Map()
map.set('in',"INDIA")
map.set('USA',"America")
map.set('DB',"Dubai")
//console.log(map)

// for (const m of map) {
//  console.log(m)  it will orint the whole map
// }

for (const [key , value] of map) {
    console.log(`${key} :- ${value}`)
}

// Note:- For Of loop is work with objects
