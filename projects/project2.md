##  project 2 solutin code 

``` javascript
const form = document.querySelector('form');

// usecase for empty values
// const height=document.getElementById('#height');
// const weight=document.getElementById('#weight');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');
  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `<span>please give the valid height ${height}</span>`;
  } else if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `<span>please give the valid height ${height}</span>`;
  }  else{
    const bmi= (weight/((height*height)/10000)).toFixed(2);

    if(bmi<18.6){
      result.innerHTML=`<span>you current BMI is ${bmi} and you are under weight </span>`
    }  else if(bmi>24.9){
      result.innerHTML=` <span>you current BMI is ${bmi} and you are over weight </span>`
    }  else{
      result.innerHTML=`<span>you current BMI is ${bmi} and you are in normal range  </span>`
    }
    //result.innerHTML=`${bmi}`

  }

  console.log(height * weight);
});

```