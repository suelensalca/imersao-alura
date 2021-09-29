let cartaAtchim = {
  nome: "Atchim",
  imagem: "img/atchim.png",
  atributos: {
    ataque: 7,
    defesa: 4,
    magia: 9,
  },
};
let cartaDengoso = {
  nome: "Dengoso",
  imagem: "img/dengoso.png",
  atributos: {
    ataque: 9,
    defesa: 3,
    magia: 3,
  },
};
let cartaDunga = {
  nome: "Dunga",
  imagem: "img/dunga.png",
  atributos: {
    ataque: 5,
    defesa: 5,
    magia: 4,
  },
};
let cartaFeliz = {
  nome: "Feliz",
  imagem: "img/feliz.png",
  atributos: {
    ataque: 4,
    defesa: 9,
    magia: 7,
  },
};
let cartaMestre = {
  nome: "Mestre",
  imagem: "img/mestre.png",
  atributos: {
    ataque: 6,
    defesa: 8,
    magia: 8,
  },
};
let cartaSoneca = {
  nome: "Soneca",
  imagem: "img/soneca.png",
  atributos: {
    ataque: 3,
    defesa: 2,
    magia: 6,
  },
};
let cartaZangado = {
  nome: "Zangado",
  imagem: "img/zangado.png",
  atributos: {
    ataque: 10,
    defesa: 4,
    magia: 3,
  },
};

let cartaMaquina;
let cartaJogador;
let cartas = [
  cartaAtchim,
  cartaDengoso,
  cartaDunga,
  cartaFeliz,
  cartaMestre,
  cartaSoneca,
  cartaZangado,
];

function sortear() {
  // @ts-ignore
  let numeroCartaMaquina = parseInt(Math.random() * 7);
  cartaMaquina = cartas[numeroCartaMaquina];

  // @ts-ignore
  let numeroCartaJogador = parseInt(Math.random() * 7);
  while (numeroCartaJogador == numeroCartaMaquina) {
    // @ts-ignore
    numeroCartaJogador = parseInt(Math.random() * 7);
  }
  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);

  // @ts-ignore
  document.getElementById("sortear").disabled = true;
  // @ts-ignore
  document.getElementById("jogar").disabled = false;
  exibirCartaJogador();
}

function obtemAtributoSelecionado() {
  let radioAtributo = document.getElementsByName("atributo");
  for (let i = 0; i < radioAtributo.length; i++) {
    // @ts-ignore
    if (radioAtributo[i].checked) {
      // @ts-ignore
      return radioAtributo[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var divResultado = document.getElementById("resultado");

  if (
    cartaJogador.atributos[atributoSelecionado] >
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    // @ts-ignore
    htmlResultado = "<p class='resultado-final'>Venceu</p>";
  } else if (
    cartaJogador.atributos[atributoSelecionado] <
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    // @ts-ignore
    htmlResultado = "<p class='resultado-final'>Perdeu</p>";
  } else {
    // @ts-ignore
    htmlResultado = "<p class='resultado-final'>Empatou</p>";
  }
  // @ts-ignore
  divResultado.innerHTML = htmlResultado;

  // @ts-ignore
  document.getElementById("jogar").disabled = true;
  exibirCartaMaquina();
}

function exibirCartaJogador() {
  let divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;

  let moldura =
    '<img src="img/card.png" style="width: inherit; height: inherit; position: absolute"/>';
  let tagHTML = "<div id='opcoes' class='carta-status'>";

  let opcoesTexto = "";
  for (let atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }
  let nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;

  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
  let divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;

  let moldura =
    '<img src="img/card.png" style="width: inherit; height: inherit; position: absolute"/>';
  let tagHTML = "<div id='opcoes' class='carta-status'>";

  let opcoesTexto = "";
  for (let atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p type='text' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo] +
      "</p>";
  }
  let nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;

  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}
