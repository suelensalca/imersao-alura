function ConverterDolar() {
  var valorElemento = document.getElementById("valor");
  // @ts-ignore
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);

  var valorEmReal = valorEmDolarNumerico * 5.25;

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = `O resultado de ${valor} Dólares em Real é R$ ${valorEmReal.toFixed(
    2
  )}`;
  elementoValorConvertido.innerHTML = valorConvertido;
}

function ConverterEuro() {
  var valorElemento = document.getElementById("valor");
  // @ts-ignore
  var valor = valorElemento.value;
  var valorEmEuroNumerico = parseFloat(valor);

  var valorEmReal = valorEmEuroNumerico * 6.18;

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = `O resultado de ${valor} Euros em Real é R$ ${valorEmReal.toFixed(
    2
  )}`;
  elementoValorConvertido.innerHTML = valorConvertido;
}

function ConverterBitcoin() {
  var valorElemento = document.getElementById("valor");
  // @ts-ignore
  var valor = valorElemento.value;
  var valorEmBitcoinNumerico = parseFloat(valor);

  var valorEmReal = valorEmBitcoinNumerico * 252110.74;

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = `O resultado de ${valor} Bitcoins em Real é R$ ${valorEmReal.toFixed(
    2
  )}`;
  elementoValorConvertido.innerHTML = valorConvertido;
}
