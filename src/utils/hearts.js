// Lanza corazones flotantes (efecto visual). Se llama desde cualquier componente.
const EMOJIS = ["❤️", "💖", "💕", "🌹"];

export function hearts(n = 1) {
  for (let i = 0; i < n; i++) {
    const el = document.createElement("span");
    el.className = "fly";
    el.textContent = EMOJIS[(Math.random() * EMOJIS.length) | 0];
    el.style.left = Math.random() * 100 + "vw";
    el.style.fontSize = 1 + Math.random() * 1.6 + "rem";
    el.style.animationDuration = 5 + Math.random() * 5 + "s";
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 10500);
  }
}
