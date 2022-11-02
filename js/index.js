/*const primeiraPagina = document.querySelector('#primeiraPagina');
const score = document.querySelector('#score');
const button = document.querySelector('.button');
const perguntas = document.querySelector('#perguntas');
const jogador = document.querySelector('#jogador');*/

/*buttonStart.addEventListener('click', () => {
  if (inputName.value === '') {
    return;
  }
  playNow.renderDeck();

  primeiraPagina.style.display = 'none';
  score.style.display = 'flex';

  playNow.userName = inputName.value;
  jogador.innerText = playNow.userName;
  points.innerText = playNow.points;
  settinUpGame();
});*/

// chamar a array, aparece a pergunta do objeto 1 e fazer  uma comparação se o click
// foi igual ao da resposta.
// fazer um if de comparação, botão clicado é igual a resposta,
// certo ou caso seja diferente será errado e
// passar para a próxima se certo, dar outra chance ou pular se errado.

const game = new Quiz();

game.startGame();

game.checkAnswer();
