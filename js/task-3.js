'use strict';
const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', onNameInputInput);
function onNameInputInput(event) {
  const inputValue = event.currentTarget.value.trim();
  if (inputValue !== '') {
    nameOutput.textContent = inputValue;
  } else {
    nameOutput.textContent = 'Anonymous';
  }
}
