'use strict';

const game = {
  max: 20,
  key: 0,
  score: 20,
  highScore: 0,
  message: function (alert) {
    document.querySelector('.message').textContent = alert;
  },
  check: function (guess) {
    if (guess === this.key) {
      this.message('🎉 Correct Number!');
      document.querySelector('.number').textContent = this.key;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '40rem';
      if (this.score > this.highScore) {
        this.highScore = this.score;
        document.querySelector('.highscore').textContent = this.highScore;
      }
    } else if (guess !== this.key) {
      if (this.score > 1) {
        if (guess > this.key) {
          this.message('📈 ' + guess + ' is too high!');
        } else {
          this.message('📉 ' + guess + ' is too low!');
        }
        document.querySelector('.guess').value = '';
        this.score--;
        document.querySelector('.score').textContent = this.score;
      } else {
        this.message('💥 You lost the game!');
        document.querySelector('.score').textContent = 0;
      }
    }
  },
  restart: function () {
    this.score = this.max;
    this.init();
  },
  level: function (level) {
    level = Number(level);
    this.max = level;
    this.score = level;
    this.highScore = 0;
    document.querySelector('.highscore').textContent = 0;
    this.init();
  },
  init: function () {
    this.key = Math.trunc(Math.random() * this.max) + 1;
    this.message('Start guessing...');
    document.querySelector('.guess').value = '';
    document.querySelector('#max').textContent = this.max;
    document.querySelector('.score').textContent = this.max;
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.highscore').textContent = this.highScore;
    console.log(this.key);
  },
};

// Game control
// Khoi tao tro choi khi bat dau
game.init();
// kiem tra so
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // Kiem tra du lieu
  if (!guess) {
    game.message('⛔️ No number!');
  } else {
    game.check(guess);
  }
});
// khoi dong lai tro choi
document.querySelector('.again').addEventListener('click', function () {
  game.restart();
});
// khoi tao level
document.querySelector('#level').addEventListener('change', function () {
  let level = document.querySelector('#level').value;
  game.level(level);
});
