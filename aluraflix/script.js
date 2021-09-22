function adicionarFilme() {
  // @ts-ignore
  var filmeFavorito = document.getElementById("filme").value;
  if (filmeFavorito.endsWith(".jpg")) {
    listarFilmesnaTela(filmeFavorito);
    console.log(filmeFavorito);
  } else {
    console.log("Endereço de filme inválido");
  }
  // @ts-ignore
  document.getElementById("filme").value = "";
}

function listarFilmesnaTela(filme) {
  var elementoFilmeFavorito = "<img src=" + filme + ">";
  var elementoListaFilmes = document.getElementById("listaFilmes");
  elementoListaFilmes.innerHTML =
    elementoListaFilmes.innerHTML + elementoFilmeFavorito;
}
