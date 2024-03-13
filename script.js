document.getElementById("iniciar").addEventListener("click", function () {
  // Pergunta para o usuário e obtém as respostas
  var paixoes = [];
  for (var i = 0; i < 3; i++) {
    paixoes.push(
      prompt("O que você ama? (cite 3) (resposta " + (i + 1) + "/3)?")
    );
  }

  var habilidades = [];
  for (var i = 0; i < 3; i++) {
    habilidades.push(
      prompt("O que você faz bem (resposta " + (i + 1) + "/3)?")
    );
  }

  var necessidadesMundo = [];
  for (var i = 0; i < 3; i++) {
    necessidadesMundo.push(
      prompt("Do que o mundo precisa (cite 3)  (resposta " + (i + 1) + "/3)?")
    );
  }

  var remuneracoes = [];
  for (var i = 0; i < 3; i++) {
    remuneracoes.push(
      prompt(
        "Pelo que você pode ser pago(a) (cite 3)  (resposta " + (i + 1) + "/3)?"
      )
    );
  }

  // Insere as respostas nos círculos correspondentes
  document.getElementById("circuloSuperior").innerHTML +=
    "<div class='resposta1'>" + paixoes.join("<br>") + "</div>";
  document.getElementById("circuloEsquerdo").innerHTML +=
    "<div class='resposta2'>" + habilidades.join("<br>") + "</div>";
  document.getElementById("circuloDireito").innerHTML +=
    "<div class='resposta3'>" + remuneracoes.join("<br>") + "</div>";
  document.getElementById("circuloInferior").innerHTML +=
    "<div class='resposta4'>" + necessidadesMundo.join("<br>") + "</div>";
});
