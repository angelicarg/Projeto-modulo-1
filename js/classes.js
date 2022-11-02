class Quiz {
  constructor() {
    this.userName = '';
    this.life = 3;
    this.round = 0;
    this.questions = [
      {
        pergunta: 'Qual é o carro?',
        alternativas: [
          '../assets/avião.jpg',
          '../assets/carro.jpg',
          '../assets/escavadeira.jpg',
        ],
        resposta: '../assets/carro.jpg',
      },
      {
        pergunta: 'Escolha a faixa de pedestre:',
        alternativas: [
          '../assets/sinaldetransito.jpg',
          '../assets/sinaldeparar.jpg',
          '../assets/faixadepedestre.jpg',
        ],
        resposta: '../assets/faixadepedestre.jpg',
      },
      {
        pergunta:
          'Escolha a imagem combina com a frase: Eu gosto de andar de carro!',
        alternativas: [
          '../assets/andardecarro.jpg',
          '../assets/andardeônibus.jpg',
          '../assets/andardebyke.jpg',
        ],
        resposta: '../assets/andardecarro.jpg',
      },
      {
        pergunta: 'Qual é o Avião?',
        alternativas: [
          '../assets/van.jpg',
          '../assets/trem.jpg',
          '../assets/avião.jpg',
        ],
        resposta: '../assets/avião.jpg',
      },
      {
        pergunta: 'Qual é o sinal de Pare?',
        alternativas: [
          '../assets/sinaldetransito.jpg',
          '../assets/sinaldeparar.jpg',
          '../assets/faixadepedestre.jpg',
        ],
        resposta: '../assets/sinaldeparar.jpg',
      },
      {
        pergunta: 'Escolha a imagem do Trem:',
        alternativas: [
          '../assets/helicóptero.jpg',
          '../assets/ônibus.jpg',
          '../assets/trem.jpg',
        ],
        resposta: '../assets/trem.jpg',
      },
    ];
  }

  startGame() {
    let primeiraPagina = document.querySelector('#primeiraPagina');
    let inputName = document.querySelector('#jogador');
    let gameBoard = document.querySelector('#gameBoard');
    let startBtn = document.querySelector('.button');
    let pergunta = document.querySelector('#pergunta');
    let respostas = document.querySelectorAll('.resposta');
    let campoName = document.querySelector('#nome');

    startBtn.addEventListener('click', () => {
      primeiraPagina.className = 'hide';
      gameBoard.classList.remove('hide');
      this.userName = inputName.value;
      campoName.innerText = this.userName;
      pergunta.innerText = this.questions[this.round].pergunta;
      console.log(inputName.value);

      respostas.forEach((btn, i) => {
        btn.src = this.questions[this.round].alternativas[i];
      });
    });
  }

  checkAnswer() {
    let respostas = document.querySelectorAll('.resposta');
    respostas.forEach((btn, i) => {
      btn.addEventListener('click', () => {
        console.log(this.questions[this.round].resposta, 'console da resposta');
        console.log(btn);
        if (btn.getAttribute('src') !== this.questions[this.round].resposta) {
          this.life--;
          console.log('errou');
        } else {
          console.log('acertou');
        }
      });
    });
  }

  nextQuestion() {}

  checkStatus() {}
}
