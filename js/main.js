'use strict';

const mainBlock = document.querySelector(`#main`);

const BUTTONS_KEYCODES = {
  leftButton: 37,
  rigthButton: 39
};

const displaysArray = Array.from(document.querySelectorAll(`template`), it => it.content);

const showDisplay = function(num) {
  mainBlock.innerHTML = '';
  mainBlock.appendChild(displaysArray[num].cloneNode(true));
};

let currentDisplay = 0;

const showNextDisplay = function() {
  if (currentDisplay === displaysArray.length - 1) {
    currentDisplay = 0;
    showDisplay(currentDisplay);
  } else {
    ++currentDisplay;
    showDisplay(currentDisplay);
  };
};

const showPrevDisplay = function() {
  if (currentDisplay === 0) {
    currentDisplay = displaysArray.length - 1;
    showDisplay(currentDisplay);
  } else {
    --currentDisplay;
    showDisplay(currentDisplay);
  };
};



document.addEventListener(`keydown`, function(e) {
  if (e.keyCode === BUTTONS_KEYCODES.leftButton) {
    showPrevDisplay();
  };

  if (e.keyCode === BUTTONS_KEYCODES.rigthButton) {
    showNextDisplay();
  };
});

document.querySelector(`body`).insertAdjacentHTML(`beforeEnd`, `
<div class="arrows__wrap">
  <style>
    .arrows__wrap {
      position: absolute;
      top: 95px;
      left: 50%;
      margin-left: -56px;
    }
    .arrows__btn {
      background: none;
      border: 2px solid black;
      padding: 5px 20px;
    }
  </style>
  <button class="arrows__btn"><-</berutton>
  <button class="arrows__btn">-></button>
</div>
`);

const leftArrowsBtn = document.querySelectorAll(`.arrows__btn`)[0];
const rigthArrowsBtn = document.querySelectorAll(`.arrows__btn`)[1];

leftArrowsBtn.addEventListener(`click`, showPrevDisplay);
rigthArrowsBtn.addEventListener(`click`, showNextDisplay);

showDisplay(currentDisplay);
