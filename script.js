const PUBLIC_SITE_URL = "https://slanzz369.github.io/thermo-lio/";

document.getElementById("qr-url").textContent = PUBLIC_SITE_URL;

const header = document.querySelector(".site-header");
let lastKnownY = 0;

function updateHeaderShadow() {
  const y = window.scrollY || document.documentElement.scrollTop;
  if (Math.abs(y - lastKnownY) < 8) return;
  lastKnownY = y;
  header.style.boxShadow = y > 20 ? "0 10px 30px rgba(15, 48, 105, 0.12)" : "none";
}

window.addEventListener("scroll", updateHeaderShadow, { passive: true });
updateHeaderShadow();
