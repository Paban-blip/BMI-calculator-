const form = document.querySelector('form')

form.addEventListener('submit', function(e){
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('.results')
  
  if (height === '' || height < 0 || isNaN(height)) {
    results.style.color = 'red';
    results.innerHTML= `*Please enter a valid height`
  }else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML= `*Please enter a valid weight`
  } else {
   const BMI = (weight / ((height * height)/ 10000)).toFixed(2);
   //show the result 
   //results.innerHTML = `<span>Your BMI IS : ${BMI}</span> `;
   if (BMI < 18.6) {
     results.style.color = 'yellow'
     results.innerHTML = `<span>BMI is: ${BMI} your under weight</span>`
   }else if (BMI >= 18.6 && BMI <= 24.9) {
     results.style.color = 'white'
     results.innerHTML = `<span>BMI is: ${BMI} weight is Normal</span>`
   }else {
     results.style.color = 'red'
    results.innerHTML = `<span>BMI is: ${BMI} your over weight</span>`
   }
  }
})