let jogadores = [];

function adicionarJogador() {
  // @ts-ignore
  let nomeJogador = document.getElementById("jogador").value;
  let novoJogador = {
    jogador: nomeJogador,
    vitorias: 0,
    empates: 0,
  };
  jogadores.push(novoJogador);
  exibeJogadores(jogadores);
}

function exibeJogadores(jogadores) {
  let elemento = "";
  for (let i = 0; i < jogadores.length; i++) {
    elemento += "<table><tr><th>" + jogadores[i].jogador + "</th></tr>";
    elemento += "<tr><th>Vitórias: " + jogadores[i].vitorias + "</th></tr>";
    elemento += "<tr><th>Empates: " + jogadores[i].empates + "</th></tr>";
    elemento +=
      "<tr><th><button onClick='adicionarVitoria(" +
      i +
      ")'>Vitória</button></th></tr>";
    elemento +=
      "<tr><th><button onClick='adicionarEmpate(" +
      i +
      ")'>Empate</button></th></tr></table>";
  }

  document.getElementById("tabelaJogadores").innerHTML = elemento;
}

function adicionarVitoria(i) {
  let jogadorAtual = jogadores[i];
  jogadorAtual.vitorias++;
  exibeJogadores(jogadores);
}

function adicionarEmpate(i) {
  let jogadorAtual = jogadores[i];
  jogadorAtual.empates++;
  for (let j = 0; j < jogadores.length; j++) {
    if (jogadorAtual != jogadores[j]) {
      jogadores[j].empates++;
    }
  }
  exibeJogadores(jogadores);
}

function reset() {
  jogadores = [];
  document.getElementById("tabelaJogadores").innerHTML = "";
}

function clearField(input) {
  input.value = "";
}
