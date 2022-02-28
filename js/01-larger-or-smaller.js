let num1 = parseInt(prompt('Enter a number between 1 and 100'))
let num2 = parseInt(prompt('Enter another number between 1 and 100'))
 if (num1 > num2 ) {
     document.write(num1)
 }
  if (num2 > num1) {
      document.write(num2)
  } 
  if (num1 === num2) {
      alert('You must enter a different number')
  }
