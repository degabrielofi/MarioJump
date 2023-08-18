const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const score = document.querySelector(".score");
const gameOver = document.querySelector("#game_Over");
const clouds = document.querySelector(".clouds");
const time = document.querySelector("#time");
const soundElement = document.querySelector(".sound_mario");
const soundTheme = document.querySelector(".theme");
const soundGameOver = document.querySelector(".gameover");
const html = document.querySelector("html");

function playSound() {
  soundElement.currentTime = 0;
  soundElement.play();
}

let minute = 0;
let second = 0;
let millisecond = 0;
let cron = setInterval(() => {
  timer();
}, 10);

function returnData(input) {
  return input >= 10 ? input : `0${input}`;
}

function timer() {
  if ((millisecond += 10) == 1000) {
    millisecond = 0;
    second++;
  }
  if (second == 60) {
    second = 0;
    minute++;
  }
}

const jump = () => {
  mario.classList.add("jump");

  setTimeout(() => {
    mario.classList.remove("jump");
  }, 500);
};

const loop = setInterval(() => {
  const cloudsPosition = clouds.offsetLeft;
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");

  if (document.body.offsetWidth <= 760) {
    if (
      pipePosition <= 10 &&
      pipePosition > 0 &&
      marioPosition < 10 &&
      cloudsPosition > 0
    ) {
      pipe.style.animation = "none";
      pipe.style.left = `${pipePosition}px`;

      mario.style.animation = "none";
      mario.style.bottom = `${marioPosition}px`;

      mario.src = "./assets/images/game-over.png";
      mario.style.width = "65px";
      mario.style.marginLeft = "50px";

      clouds.style.animation = "none";
      clouds.style.left = `${cloudsPosition}px`;

      soundTheme.pause();
      soundGameOver.play();

      document.addEventListener("keydown", () => {
        soundElement.pause();
      });

      document.addEventListener("click", () => {
        soundElement.pause();
      });

      html.addEventListener("click", () => {
        soundTheme.pause();
      });

      html.addEventListener("keydown", () => {
        soundTheme.pause();
      });

      document.getElementById("minute").innerText = returnData(minute);
      document.getElementById("second").innerText = returnData(second);
      gameOver.style.display = "flex";
      clearInterval(loop);
    }
  } else if (
    pipePosition <= 120 &&
    pipePosition > 0 &&
    marioPosition < 80 &&
    cloudsPosition > 0
  ) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;

    mario.src = "./assets/images/game-over.png";
    mario.style.width = "75px";
    mario.style.marginLeft = "50px";

    clouds.style.animation = "none";
    clouds.style.left = `${cloudsPosition}px`;

    soundTheme.pause();
    soundGameOver.play();

    document.addEventListener("keydown", () => {
      soundElement.pause();
    });

    document.addEventListener("click", () => {
      soundElement.pause();
    });

    html.addEventListener("click", () => {
      soundTheme.pause();
    });

    html.addEventListener("keydown", () => {
      soundTheme.pause();
    });

    document.getElementById("minute").innerText = returnData(minute);
    document.getElementById("second").innerText = returnData(second);
    gameOver.style.display = "flex";
    clearInterval(loop);
  }
}, 10);

function restart() {
  location.reload();
  gameOver.style.display = "none";
}

document.addEventListener("keydown", () => {
  playSound();
  jump();
});

document.addEventListener("click", () => {
  playSound();
  jump();
});

html.addEventListener("click", () => {
  soundTheme.play();
});

html.addEventListener("keydown", () => {
  soundTheme.play();
});
