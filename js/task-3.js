const nameInput = document.querySelector("input#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", updateName);

function updateName(event) {
  const name = event.currentTarget.value;
  nameOutput.textContent = formatName(name);
}

function formatName(name) {
  const nameTrim = name.trim();

  if (nameTrim.length === 0) {
    return "Anonymous";
  }
  return nameTrim;
}
