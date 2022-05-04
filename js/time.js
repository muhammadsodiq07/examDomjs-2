let restart = document.querySelector(".restart");
let btn = document.querySelector(".restart__btn")
let paused = document.querySelector(".paused");
let pauseIcon = document.querySelector(".bx-pause");
let playIcon = document.querySelector(".bx-play");
let volumeFull = document.querySelector(".bx-volume-full");
let volumeMute = document.querySelector(".bx-volume-mute");

function startTimer() {
  let my_timer = document.getElementById("my_timer");
  let time = my_timer.innerHTML;
  let arr = time.split(":");
  let h = arr[0];
  let m = arr[1];
  let s = arr[2];
  if (s == 0) {
    if (m == 0) {
      if (h == 0) {
        restart.style.display = "block";
        function restartBtn() {
          btn.addEventListener("click", () =>{
            window.location.reload();
            return;
          })
        }
        restartBtn() 
      }
      h--;
      m = 00;
      if (h < 10) h = "0" + h;
    }
    m--;
    if (m < 10) m = "0" + m;
    s = 20;
  }
  else s--;
  if (s < 10) s = "0" + s;
  document.getElementById("my_timer").innerHTML = h+":"+m+":"+s;
  setTimeout(startTimer, 1000);
}

startTimer();


function pausedGame() {
  pauseIcon.addEventListener('click', () => {
    paused.style.display = 'block';
  });
}
pausedGame()

function changeIcon() {
  volumeFull.addEventListener('click', () => {
    volumeFull.style.display = 'none';
    volumeMute.style.display = 'block';
  })
}
changeIcon()

function changeIcon2() {
  volumeMute.addEventListener('click', () => {
    volumeMute.style.display = 'none';
    volumeFull.style.display = 'block';
  })
}
changeIcon2()


function playGame() {
  playIcon.addEventListener('click', () => {
    paused.style.display = 'none';
  });
}
playGame()