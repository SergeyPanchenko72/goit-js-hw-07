'use strict';
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputQuantity = document.querySelector('input');
const buttonCreate = document.querySelector('button[data-create]');
const buttonDestroy = document.querySelector('button[data-destroy]');
const boxesAdd = document.querySelector('#boxes');

function createBoxes(amount) {
  destroyBoxes();
  let boxWidth = 30;
  let boxHeight = 30;

  for (let number = 0; number < amount; number++) {
    boxesAdd.insertAdjacentHTML(
      'beforeend',
      `<div style="background-color:${getRandomHexColor()}; width:${boxWidth}px; height:${boxHeight}px;"></div>`
    );
    boxWidth += 10;
    boxHeight += 10;
  }
  inputQuantity.value = '';
}

function onButtonCreateClick() {
  if (inputQuantity.value >= 1 && inputQuantity.value <= 100) {
    createBoxes(inputQuantity.value);
  }
}

function destroyBoxes() {
  boxesAdd.innerHTML = '';
}
function onButtonDestroyClick() {
  destroyBoxes();
}
buttonCreate.addEventListener('click', onButtonCreateClick);

buttonDestroy.addEventListener('click', onButtonDestroyClick);

boxesAdd.addEventListener('click', onBoxesAddLisnerClick);
function onBoxesAddLisnerClick(event) {
  event.target.style.borderRadius = '50%';
}
