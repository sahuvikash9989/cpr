let lastPressTime = null;
let compressions = [];
const feedbackEl = document.getElementById('feedback');
const cprArea = document.getElementById('cprArea');

cprArea.addEventListener('click', () => {
  const now = Date.now();

  if (lastPressTime) {
    const interval = now - lastPressTime;
    compressions.push(interval);

    const rate = 60000 / interval; // BPM (compressions per minute)

    if (rate < 100) {
      feedbackEl.textContent = `Too Slow (${Math.round(rate)} bpm) ⏱️`;
    } else if (rate > 120) {
      feedbackEl.textContent = `Too Fast (${Math.round(rate)} bpm) ⚡`;
    } else {
      feedbackEl.textContent = `Good Pace! (${Math.round(rate)} bpm) ✅`;
    }
  } else {
    feedbackEl.textContent = 'First compression detected!';
  }

  lastPressTime = now;
});

function reset() {
  lastPressTime = null;
  compressions = [];
  feedbackEl.textContent = 'Waiting for input...';
}
