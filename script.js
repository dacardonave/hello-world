const clockEl = document.getElementById("clock");
const countdownEl = document.getElementById("countdown");
const qr = document.getElementById("qr");
const popup = document.getElementById("qr-popup");

// Fecha de expiración
const expirationDate = new Date("2025-06-30T23:59:59");

function updateClock() {
  const now = new Date();
  clockEl.textContent = now.toLocaleString("en-US", {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });
}

function updateCountdown() {
  const now = new Date();
  let diff = Math.floor((expirationDate - now) / 1000);

  if (diff < 0) {
    countdownEl.textContent = "Expired";
    return;
  }

  const days = Math.floor(diff / (3600 * 24));
  diff %= 3600 * 24;
  const hours = Math.floor(diff / 3600);
  diff %= 3600;
  const minutes = Math.floor(diff / 60);
  const seconds = diff % 60;

  countdownEl.textContent = `Expires in ${String(days).padStart(2, '0')}:${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Animación de parpadeo
let toggle = false;
const colorsA = ["fuchsia", "limegreen", "deeppink"];
const colorsB = ["violet", "mediumspringgreen", "lightpink"];

function animateBars() {
  const bars = [document.getElementById("bar1"), document.getElementById("bar2"), document.getElementById("bar3")];
  const colors = toggle ? colorsA : colorsB;
  bars.forEach((bar, i) => {
    bar.style.backgroundColor = colors[i];
  });
  toggle = !toggle;
}

qr.onclick = () => {
  popup.style.display = "flex";
};

popup.onclick = () => {
  popup.style.display = "none";
};

// Init
setInterval(() => {
  updateClock();
  updateCountdown();
  animateBars();
}, 1000);

updateClock();
updateCountdown();
animateBars();