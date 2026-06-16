const body = document.querySelector("body");
const buttonChangeColor = document.querySelector("button.change-color");
const spanColor = document.querySelector(".color");

buttonChangeColor.addEventListener("click", handleChangeColor);

function handleChangeColor() {
  const newColor = getRandomHexColor();
  spanColor.textContent = newColor;
  body.style.backgroundColor = newColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
