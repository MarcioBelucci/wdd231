const messageEl = document.getElementById("visit-message");
const textEl = document.getElementById("visit-text");
const closeBtn = document.getElementById("visit-close");

const DAY = 1000 * 60 * 60 * 24;
const KEY = "discover-last-visit";
const WELCOME = "Welcome! Let us know if you have any questions.";

function getMessage() {
  const now = Date.now();
  let message = WELCOME;

  try {
    const last = Number(localStorage.getItem(KEY));

    if (last) {
      const elapsed = now - last;
      if (elapsed < DAY) {
        message = "Back so soon! Awesome!";
      } else {
        const days = Math.floor(elapsed / DAY);
        message = days === 1
          ? "You last visited 1 day ago."
          : `You last visited ${days} days ago.`;
      }
    }

    localStorage.setItem(KEY, now);
  } catch (error) {
    console.error("localStorage unavailable:", error);
  }

  return message;
}

textEl.textContent = getMessage();
closeBtn.addEventListener("click", () => { messageEl.hidden = true; });