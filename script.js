const questions = [
  {
    questio: "Quin país té més població?",
    respostaCorrecta: "La Xina",
    respostaIncorrecta: "L'India",
  },
  {
    questio: "El primer astronàuta a trepitjar la Lluna va ser?",
    respostaCorrecta: "Neil Amstrong",
    respostaIncorrecta: "Louis Amstrong",
  }
];

let indexQuestioActual = 0;
let respostesCorrectes = 0;
let respostesIncorrectes = 0;

const questioProposada = document.getElementById("questioProposada");
const btnEsquerre = document.getElementById("btnEsquerre");
const btnDret = document.getElementById("btnDret");
const missatge = document.getElementById("missatge");
const btnReiniciar = document.getElementById("btnReiniciar");

function barrejaRespostes(correcta, incorrecta) {
  const respostes = [correcta, incorrecta];
  respostes.sort(() => Math.random() - 0.5);
  return respostes;
}

function mostraQuestio() {

  if(indexQuestioActual < questions.length) {
    const questioActual = questions[indexQuestioActual];
    questioProposada.textContent = questioActual.questio;

    const [barrejatCorrecte, barrejatIncorrecte] = barrejaRespostes(
      questioActual.respostaCorrecta,
      questioActual.respostaIncorrecta
    );

    btnEsquerre.textContent = barrejatCorrecte;
    btnDret.textContent = barrejatIncorrecte;
  } else {
    // El joc ha acabat.
    if(respostesCorrectes === questions.length) {
      missatge.textContent = "Has guanyat! Has respost totes les qüestions correctament!";
    } else {
      missatge.textContent = `Joc acabat. Respostes correctes: ${ respostesCorrectes },
      Respostes incorrectes: ${ respostesIncorrectes }`;
    }

    btnEsquerre.style.display = "none";
    btnDret.style.display = "none";
    btnReiniciar.style.display = "block";
  }
}

function comprovaResposta(respostaSeleccionada) {

  const questioActual = questions[indexQuestioActual];

  if(respostaSeleccionada === questioActual.respostaCorrecta) {
    respostesCorrectes++;
  } else {
    respostesIncorrectes++;
  }

  indexQuestioActual++;

  mostraQuestio();
}

btnEsquerre.addEventListener("click", () => comprovaResposta(btnEsquerre.textContent));
btnDret.addEventListener("click", () => comprovaResposta(btnDret.textContent));

btnReiniciar.addEventListener("click", () =>{
  indexQuestioActual = 0;
  respostesCorrectes = 0;
  respostesIncorrectes = 0;
  missatge.textContent = "";
  btnEsquerre.style.display = "inline-block";
  btnDret.style.display = "inline-block";
  btnReiniciar.style.display = "none";

  mostraQuestio();
});

// Començar el joc
mostraQuestio();