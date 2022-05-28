window.addEventListener('load', function () {
  const audio = document.getElementById('audio');
  const lb = document.getElementById('lb');
  lb.onclick = function () {
    if (audio.paused) {
      audio.play();
      this.src = 'img/lb2.png'
      return
    }
    this.src = 'img/lb1.png'
    audio.pause();
  }
})
