import { useState } from 'react';
import './App.css';

const questoes = [
  {
    questao: "Qual o idioma falado no Brasil?",
    respostas: [
      { alternativas: "Português", estaCorreto: true },
      { alternativas: "Inglês", estaCorreto: false },
      { alternativas: "Francês", estaCorreto: false },
      { alternativas: "Alemão", estaCorreto: false },
    ],
  },
  {
    questao:
      "Quais os países que têm a maior e a menor expectativa de vida do mundo?",
      respostas: [
      { alternativas: "Japão e Serra Leoa", estaCorreto: true },
      { alternativas: "Austrália e Afeganistã", estaCorreto: false },
      { alternativas: "Itália e Chade", estaCorreto: false },
      { alternativas: "Brasil e Congo", estaCorreto: false },
    ],
  },
  {
    questao: "Qual empresa criou o Iphone?",
    respostas: [
      { alternativas: "Apple", estaCorreto: true },
      { alternativas: "Intel", estaCorreto: false },
      { alternativas: "Amazon", estaCorreto: false },
      { alternativas: "Microsoft", estaCorreto: false },
    ],
  },
  {
    questao: "Como aprender a programar?",
    respostas: [
      { alternativas: "Praticando o que se aprende", estaCorreto: true },
      { alternativas: "Vendo vídeo", estaCorreto: false },
      { alternativas: "Lendo", estaCorreto: false },
      { alternativas: "Dormindo", estaCorreto: false },
    ],
  },
];

function App() {
  const [pontuacao, setPontuacao] = useState(false);
  const [pontos, setPontos] = useState(0)
  const [questaoAtual, setQuestaoAtual] = useState(0);

  function certoOuErrado(estaCorreto){
    if(estaCorreto){
      setPontos(pontos + 1);
    }

    const proximaQuestao = questaoAtual + 1;
    if(proximaQuestao < questoes.length){
      setQuestaoAtual(proximaQuestao);
    } else {
      setPontuacao(true);
    }

  }


  return (
    <div className="App">
      {pontuacao ? (
        <div className='pontuacao'>
          <h1>Pontuação: {pontos} de {questoes.length}</h1>
        </div>
      ) : (
        <div className="container">
          <>
        <div className='questao'>
        <span> Questao {questaoAtual + 1}</span> / {questoes.length}
        </div>
        <div className='perguta'>
          <span>{questoes[questaoAtual].questao}</span>
        </div>
        <div className="respostas">
          {questoes[questaoAtual].respostas.map((respostas, index) => (
            <button onClick= {() => certoOuErrado(respostas.estaCorreto)}key={index}>
              {respostas.alternativas}
              </button>
          ))}
        </div>
        </>
        </div>
      )}
    </div>
  );
}

export default App;
