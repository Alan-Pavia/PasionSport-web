const randomCharactersInput = document.getElementById("randomCharacters");
const userCharactersInput = document.getElementById("userCharacters");
const generateButton = document.getElementById("generateButton");
const checkButton = document.getElementById("checkButton");
const messageElement = document.getElementById("message");

function generarCharacteres() {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz";
  let randomCharacters = "";
  for (let i = 0; i < 5; i++) {
    randomCharacters += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  randomCharactersInput.value = randomCharacters;
  event.preventDefault()
}

function checkCharacteres() {
  const randomCharacters = randomCharactersInput.value;
  const userCharacters = userCharactersInput.value;
  if (randomCharacters === userCharacters) {
    messageElement.innerHTML="Validacion realizada con exito!"
  } else {
    messageElement.innerHTML="Incorrecto intente nuevamente"
  }
  event.preventDefault()
}

generateButton.addEventListener("click", generarCharacteres);
checkButton.addEventListener("click", checkCharacteres);