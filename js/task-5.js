'use strict';
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColor = document.addEventListener('click', onChangeColorClick);
const bodyColor = document.querySelector('body');
const spanColor = document.querySelector('.color');

function onChangeColorClick(event) {
  const color = getRandomHexColor();
  bodyColor.style.backgroundColor = color;
  spanColor.textContent = color;
}
