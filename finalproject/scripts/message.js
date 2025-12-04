// visit count
const visitFeedback = document.querySelector('#timeBetween');

let visitTime = Number(localStorage.getItem("firstvisit"));

if (!visitTime) {
  visitFeedback.textContent = "Welcome! Let us know if you have any questions.";
  localStorage.setItem("firstvisit", Date.now());
} else {
  const difference = (Date.now() - visitTime) / 86400000; // días

  if (difference < 1) {
    visitFeedback.textContent = "Back so soon! Awesome!";
  } else {
    visitFeedback.textContent = `You last visited ${Math.floor(difference)} day(s) ago`;
  }
}
localStorage.setItem("firstvisit", Date.now());