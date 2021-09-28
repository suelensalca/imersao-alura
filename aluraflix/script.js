let listaDeFilmes = [];

function adicionarFilme() {
  // @ts-ignore
  var filmeFavorito = document.getElementById("filme").value;
  var elementoFilmeFavorito = "<img src=" + filmeFavorito + ">";

  if (listaDeFilmes[listaDeFilmes.length - 1] == elementoFilmeFavorito) {
    alert("Filme já foi adicionado");
  } else if (filmeFavorito.endsWith(".jpg")) {
    listaDeFilmes.push(elementoFilmeFavorito);
  } else {
    alert("Endereço de filme inválido");
  }

  // @ts-ignore
  document.getElementById("listaFilmes").innerHTML = listaDeFilmes;
  // @ts-ignore
  document.getElementById("filme").value = "";
}
