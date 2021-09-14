let notas = [];

function somaNotas() {
  // @ts-ignore
  let strNumber = document.getElementById("notaDigitada").value;

  if(strNumber === ""){
    return;
  }
  
  let number = Number(strNumber).toFixed(2);

  notas.push(number);
  document.getElementById("notasSoma").innerHTML = notas.join(" + ");

  let input = document.getElementById("notaDigitada");
  clearField(input);
}

function mediaNotas() {
  somaNotas();

  let notasNumber = notas.map(Number);
  let soma = notasNumber.reduce((total, value) => {
    return total + value;
  });

  let resultado = soma / notas.length;

  document.getElementById("notasMedia").innerHTML = resultado.toFixed(2) + "!";
}

function resetMedia() {
  notas = [];
  document.getElementById("notasSoma").innerHTML = "";
  document.getElementById("notasMedia").innerHTML = "";
}

function clearField(input) {
  input.value = "";
}
