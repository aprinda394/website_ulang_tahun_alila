const message = `selamat ulang taun, birthday yg ke berapa nii??!! 
terimakasih sudah berjuang selama ini, i so proud of u, maafin dunia yang selalu jahat sama kamu, 
you deserve better than this, dimana pun kamu berada jangan pernah lupa buat senyum ya, 
minimal senyum sehari lebih dari 5 kali yaa!? inget ya anak baik, jangan lupa sayangin diri kamu sendiri sebelum sayang sama orang lain, okee!?? 
utamain diri kamu dulu, gapapa kalo belom terbiasa tapi belajar pelan pelan ya! aku gamau kamu terus terusan utamain diri orang lain 
tapi diri kamu sendiri ga kamu perhatiin, tetep jadi diri kamu sendiri ya jangan pernah maksain buat sama kaya orang lain, kamu ya kamu, 
gabisa jadi orang lain. aku ga maksa kamu jadi siapa siapa, cukup jadi diri kamu sendiri, aku gaakan protes kalo kamu gimana gimana 
jadi jangan selalu gaenakan sama aku ya, sehat selalu! aku mau usir semua penyakit yang ada supaya ga mampir mampir ke kamu, 
sekali lagi happy birthday yaa, sorry kalo aku ngucapinnya telat hehehe:D`;

let i = 0;
function typeWriter() {
  if (i < message.length) {
    document.getElementById("typing-text").innerHTML += message.charAt(i);
    i++;
    setTimeout(typeWriter, 40);
  }
}
typeWriter();

function showMessage() {
  document.getElementById("hidden-message").innerText = "I'm so proud of you 💙";
}

// Countdown (ulang tahun berikutnya 26 Mei)
const countdown = document.getElementById("countdown");
function updateCountdown() {
  const nextBirthday = new Date(new Date().getFullYear() + 1, 4, 26);
  const now = new Date();
  const distance = nextBirthday - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hrs = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((distance % (1000 * 60)) / 1000);

  countdown.innerText = `${days} hari ${hrs} jam ${mins} menit ${secs} detik`;
}
setInterval(updateCountdown, 1000);

// Salju
function createSnowflake() {
  const snowflake = document.createElement("div");
  snowflake.classList.add("snowflake");
  snowflake.innerText = "❄";
  snowflake.style.left = Math.random() * window.innerWidth + "px";
  snowflake.style.animationDuration = 3 + Math.random() * 5 + "s";
  snowflake.style.fontSize = Math.random() * 10 + 10 + "px";
  document.querySelector(".snow-container").appendChild(snowflake);
  setTimeout(() => snowflake.remove(), 8000);
}
setInterval(createSnowflake, 200);

// Musik toggle
const audio = document.getElementById('birthday-audio');
const musicButton = document.getElementById('music-toggle');
let isPlaying = false;

musicButton.addEventListener('click', () => {
  if (isPlaying) {
    audio.pause();
    musicButton.textContent = '🔇';
  } else {
    audio.play();
    musicButton.textContent = '🔊';
  }
  isPlaying = !isPlaying;
});

// Fungsi padamkan lilin
function blowCandle(candle) {
  const flame = candle.querySelector('.flame');
  if (flame) {
    flame.style.display = 'none';
  }
}

