const weddingDate = new Date("2024-08-24T11:00:00");
const timer = document.getElementById("timer");

setInterval(() => {
  const now = new Date();
  const diff = weddingDate - now;
  if (diff <= 0) {
    timer.innerHTML = "Свадьба началась!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / (1000 * 60)) % 60);
  const secs = Math.floor((diff / 1000) % 60);

  timer.innerHTML = `${days}д ${hours}ч ${mins}м ${secs}с`;
}, 1000);