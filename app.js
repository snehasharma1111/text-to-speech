const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = form.querySelector('input').value;
  const utterance = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(utterance);
})