const form = document.querySelector(".form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const inputPeso = document.querySelector('#peso');
    const inputAltura = document.querySelector('#altura');

  setResultado();

});

const resultado = document.createElement("p");


function setResultado() {
  resultado.innerHTML = ''; //Zerando o html
  resultado.className = "resultado";

  if(!inputPeso) {
      console.log('ojjj')
  }

  form.appendChild(resultado);
  const result = Number(inputAltura.value) + Number(inputPeso.value)
  return resultado.innerHTML = `${result}`
}
