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
    character = character + "!@#$%^&*()";
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
