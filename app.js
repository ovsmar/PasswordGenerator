let copyButton = document.querySelector("#copyButton");

function Submit() {
  let mdpQNT = document.getElementById("qnt").value;
  let letters = document.getElementById("letters").checked;
  let nombres = document.getElementById("nombres").checked;
  let speciaux = document.getElementById("speciaux").checked;
  let password = "";
  if (mdpQNT <= 100 && mdpQNT > 0) {
    for (var i = 0; i < mdpQNT; i++) {
      password = password + CheckBoxOfCharacter(letters, nombres, speciaux);
    }
    document.getElementById("password").innerHTML = password;
  } else {
    document.getElementById("password").innerHTML = "100 caractères maximum!";
  }
}

function CheckBoxOfCharacter(letters, nombres, speciaux) {
  let character = "";
  if (letters === true) {
    character =
      character + "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (nombres === true) {
    character = character + "1234567890";
  }
  if (speciaux === true) {
    character = character + "!?@#$%^&*()[]-+^*=?^_`{|}~:";
  }
  character = character.charAt(Math.floor(Math.random() * character.length));
  return character;
}

function copyMDP(e) {
  e.preventDefault();
  var password = document.querySelector("#password");

  password.select();

  document.execCommand("copy");
}
copyButton.addEventListener("click", copyMDP);

// random bg color event click
const body = document.querySelector("body");
const btn = document.querySelector("#submit");
const btn2 = document.querySelector("#copyButton");

[btn, btn2].forEach((element) => {
  element.addEventListener("click", () => {
    let random1 = Math.floor(Math.random() * 255);
    let random2 = Math.floor(Math.random() * 255);
    let random3 = Math.floor(Math.random() * 255);

    let colorValue = "rgb(" + random1 + "," + random2 + "," + random3 + ")";
    body.style.background = colorValue;
  });
});
