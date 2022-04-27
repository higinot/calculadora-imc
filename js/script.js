const form = document.querySelector(".form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const inputPeso = document.querySelector("#peso");
  const inputAltura = document.querySelector("#altura");

  setResultado();
});

const resultado = document.createElement("h3");

function imc(peso, altura) {
  const imc = Number(peso) / Number(Number(altura) ** 2);
  imc.toFixed(2);

  const result = [
    "Abaixo do peso",
    "Peso normal",
    "Sobrepeso",
    "Obesidade grau 1",
    "Obesidade grau 2",
    "Obesidade grau 3",
  ];

  if (imc >= 39.9) return result[5];
  if (imc >= 34.9) return result[4];
  if (imc >= 29.9 ) return result[3];
  if (imc >= 24.9) return result[2];
  if (imc >= 18.5) return result[1];
  if (imc < 18.5) return result[0];

}

function setResultado() {
  resultado.innerHTML = ""; //Zerando o html
  resultado.className = "imc";

  const inputPeso = document.querySelector("#peso");
  const inputAltura = document.querySelector("#altura");
  const calculo = Number(inputPeso.value) + Number(inputAltura.value);

  form.appendChild(resultado);

  if (!inputAltura.value && !inputPeso.value) {
    return (resultado.innerHTML = "Digite o peso e a altura!");
  }
  if (!inputAltura.value) {
    return (resultado.innerHTML = "Você precisa digitar a Altura!");
  }
  if (!inputPeso.value) {
    return (resultado.innerHTML = "Você precisa digitar o Peso!");
  }

  if (inputAltura.value && inputPeso.value) {
    return (resultado.innerHTML = imc(inputPeso.value, inputAltura.value));
  }

  console.log(inputAltura, inputAltura);
}
