// @ts-ignore
let numeroSecreto = parseInt(Math.random() * 51);

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  // @ts-ignore
  let chute = parseInt(document.getElementById("valor").value);

  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = `Você acertou! O número é ${numeroSecreto}!`;
  } else if (chute < 0 || chute > 50) {
    elementoResultado.innerHTML = "Você deve digitar um número de 0 a 50";
  } else if (chute < numeroSecreto) {
    elementoResultado.innerHTML = "Errou, tente um número maior!";
  } else if (chute > numeroSecreto) {
    elementoResultado.innerHTML = "Errou, tente um número menor!";
  }
}

function clearField(input) {
  input.value = "";
}
