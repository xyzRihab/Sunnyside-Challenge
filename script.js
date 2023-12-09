const arrow = document.getElementById('arrow');

let arrowY = 0;
let direction = 1;

function updateArrow() {
  arrowY += 1 * direction;

  arrow.style.transform = `translateY(${arrowY}px)`;

  if (arrowY <= -15 || arrowY >= 15) {
    direction *= -1;
  }

  requestAnimationFrame(updateArrow);
}

updateArrow();
