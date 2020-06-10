

// buttonElement.addEventListener("click", function(height,weight) {
//   bmi = weight / (height * height);
//   console.log(bmi)
//   alert (bmi)
// })



// function bmiResult() {
//   if (calcBmi < 25) {
//     result.textContent = "You're in good shape."
//   } else if (calcBmi > 25) {
//     result.textContent = "You are overweight, you should consider talking to a doctor to go over diet plans."
//   }
// }

function calcBmi(height,weight) {
  var height = document.getElementById("height").value;
  var weight = document.getElementById("weight").value;
  var bmi = weight / (height * height);
  return bmi;
}

var buttonElement = document.getElementById("calculate")

buttonElement.addEventListener("click", function() {
  // alert(calcBmi())
  result.textContent = "Your BMI is " + calcBmi();
  if (calcBmi() < 25) {
    text.textContent = "You are in good shape";
  } else if (calcBmi() > 25) {
    text.textContent = "You should consider talking to a doctor to help you lose weight.";
  }
})


