##  project 3 solution code

``` javascript

const realTime=document.querySelector('#clock');

setInterval(()=>{
  const date=new Date();
realTime.innerHTML=date.toLocaleTimeString();
},1000)

```