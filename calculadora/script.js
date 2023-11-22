function calculate() {
  let height = document.getElementById("height").value / 100;
  let weight = document.getElementById("weight").value;
  
  let imc = weight / height ** 2;

  let text = "";

  if (imc < 18.5) {
    text = `Seu IMC é ${imc.toFixed(2)}, Você está abaixo do peso!`;
  } else if (imc < 24.9) {
    text = ` Seu IMC é ${imc.toFixed(2)}, Você está no peso ideal!`;
  } else if (imc < 29.9) {
    text = ` Seu IMC é ${imc.toFixed(2)}, Você está com sobrepeso!`;
  } else if (imc < 39.9) {
    text = ` Seu IMC é ${imc.toFixed(2)}, Você esta com obesidade!`;
  } else if (imc > 39.9) {
    text = `Seu IMC é ${imc.toFixed(2)}, Você está com obesidade morbida!`;
  }
  document.getElementById("resultado").innerText = text;
}
