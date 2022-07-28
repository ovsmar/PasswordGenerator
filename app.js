let copyButton = document.querySelector("#copyButton");

function Submit() {
  let mdpQNT = document.getElementById("qnt").value;
  let letters = document.getElementById("letters").checked;
  let nombres = document.getElementById("nombres").checked;
  let speciaux = document.getElementById("speciaux").checked;
  let password = "";

  let a = "💀";
  let b = "🙂";
  let c = "😀";
  let d = "😁";
  let e = "😈";
  let f = "👹";
  let g = "👽";
  let h = "🤯";
  let ii = "🤡";

  let text = "Score de votre mot de passe :";

  if (mdpQNT <= 100 && mdpQNT > 0) {
    for (var i = 0; i < mdpQNT; i++) {
      password = password + CheckBoxOfCharacter(letters, nombres, speciaux);
      // console.log(password);
    }
    document.getElementById("password").innerHTML = password;
  } else {
    document.getElementById("password").innerHTML = "100 caractères maximum!";
  }

  strong = document.getElementById("emoji");
  score = document.getElementById("score");
  score.innerHTML = text;

  if (mdpQNT < 8) {
    strong.innerHTML = a;
  } else if (mdpQNT < 15) {
    strong.innerHTML = b;
  } else if (mdpQNT < 20) {
    strong.innerHTML = c;
  } else if (mdpQNT < 35) {
    strong.innerHTML = d;
  } else if (mdpQNT < 50) {
    strong.innerHTML = e;
  } else if (mdpQNT < 65) {
    strong.innerHTML = f;
  } else if (mdpQNT < 80) {
    strong.innerHTML = g;
  } else if (mdpQNT < 90) {
    strong.innerHTML = h;
  } else if (mdpQNT < 101) {
    strong.innerHTML = ii;
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
