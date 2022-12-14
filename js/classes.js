class Quiz {
  //fazendo a classe que recebe os elementos importantes do jogo.
  constructor() {
    this.userName = '';
    this.life = 3;
    this.round = 0;
    this.questions = [
      {
        pergunta: 'Qual é o CARRO ?',
        alternativas: [
          './assets/avião.jpg',
          './assets/carro.jpg',
          './assets/escavadeira.jpg',
        ],
        resposta: './assets/carro.jpg',
      },
      {
        pergunta: 'Escolha a FAIXA DE PEDESTRE:',
        alternativas: [
          './assets/sinaldetransito.jpg',
          './assets/sinaldeparar.jpg',
          './assets/faixadepedestre.jpg',
        ],
        resposta: './assets/faixadepedestre.jpg',
      },
      {
        pergunta: 'Escolha a imagem que combina: EU GOSTO DE ANDAR DE CARRO!',
        alternativas: [
          './assets/andardecarro.jpg',
          './assets/andardeônibus.jpg',
          './assets/andardebyke.jpg',
        ],
        resposta: './assets/andardecarro.jpg',
      },
      {
        pergunta: 'Qual é o AVIÃO ?',
        alternativas: [
          './assets/van.jpg',
          './assets/trem.jpg',
          './assets/avião.jpg',
        ],
        resposta: './assets/avião.jpg',
      },
      {
        pergunta: 'Qual é o SINAL DE PARE ?',
        alternativas: [
          './assets/sinaldetransito.jpg',
          './assets/sinaldeparar.jpg',
          './assets/faixadepedestre.jpg',
        ],
        resposta: './assets/sinaldeparar.jpg',
      },
      {
        pergunta: 'Escolha a imagem do TREM:',
        alternativas: [
          './assets/helicóptero.jpg',
          './assets/ônibus.jpg',
          './assets/trem.jpg',
        ],
        resposta: './assets/trem.jpg',
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
    let pontos = document.querySelector('#pontos');
    let final = document.querySelector('.final');
    let final1 = document.querySelector('.final1');

    //conectando os elementos do html no js com querySelector.

    startBtn.addEventListener('click', () => {
      primeiraPagina.className = 'hide';
      gameBoard.classList.remove('hide');
      this.userName = inputName.value;
      campoName.innerText = this.userName;
      pergunta.innerText = this.questions[this.round].pergunta;
      console.log(inputName.value);
      //comando do click, que esconde a primeira página e coloca nome e pontos na segunda página

      respostas.forEach((btn, i) => {
        btn.src = this.questions[this.round].alternativas[i];
        pontos.innerText = this.life;
        //aqui o click coloca as alternativas na nova página
      });
    });
  }

  checkAnswer() {
    let respostas = document.querySelectorAll('.resposta');
    let pontos = document.querySelector('#pontos');
    respostas.forEach((btn, i) => {
      btn.addEventListener('click', () => {
        // console.log(this.questions[this.round].resposta, 'console da resposta');
        console.log(btn);
        if (btn.getAttribute('src') !== this.questions[this.round].resposta) {
          this.life--;
          pontos.innerText = this.life;
          this.checkStatus();
          alert(' Você errou. Tente novamente.');
          console.log('errou');
          const audio = new Audio('./assets/GameOver.mp3');
          audio.play();
        } else {
          this.checkStatus();
          this.nextQuestion();
          console.log('acertou');
        }
      });
    });
  }

  nextQuestion() {
    this.round++;
    let pergunta = document.querySelector('#pergunta');
    let respostas = document.querySelectorAll('.resposta');
    pergunta.innerText = this.questions[this.round].pergunta;
    //console.log(inputName.value);

    respostas.forEach((btn, i) => {
      console.log(this.questions[this.round].alternativas[i]);
      btn.src = this.questions[this.round].alternativas[i];
    });
  }

  checkStatus() {
    if (this.life === 0) {
      this.pagFinalDerrota();
      console.log(`Que pena ${this.userName}, você perdeu!`);
      //window.alert(`Que pena ${this.userName}, você perdeu!`);
      //window.location.reload();
    }
    if (this.round === this.questions.length - 1) {
      console.log(`Parabéns ${this.userName}! Você ganhou!`);
      //window.alert(`Parabéns ${this.userName}! Você ganhou!`);
      this.pagFinalVitoria();
      //window.location.reload();
    }
  }
  pagFinalDerrota() {
    let nome2 = document.querySelector('#nome2');
    nome2.innerText = this.userName;
    gameBoard.classList.remove('show');
    gameBoard.className = 'hide';
    final.classList.remove('hide');
    final.className = 'show';
    console.log('Funcionou');
  }

  pagFinalVitoria() {
    let nome3 = document.querySelector('#nome3');
    nome3.innerText = this.userName;
    gameBoard.classList.remove('show');
    gameBoard.className = 'hide';
    final1.classList.remove('hide');
    final1.className = 'show';
    console.log('Funcionou');
  }
}

let reload = document.querySelectorAll('.reload');
reload.forEach(btn => {
  btn.addEventListener('click', () => {
    window.location.reload();
  });
});
