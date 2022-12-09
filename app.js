let copyButton = document.querySelector("#copyButton");

function Submit() {
  let mdpQNT = document.getElementById("qnt").value;
  let lowercase = document.getElementById("lowercase").checked;
  let uppercase = document.getElementById("uppercase").checked;
  let numbers = document.getElementById("numbers").checked;
  let special = document.getElementById("special").checked;
  let pass = document.getElementById("password")
  let password = "";

  let text = "Score of your password:";

// Check if the password length is valid
if (mdpQNT > 0 && mdpQNT <= 100) {
  // Check if at least one character type was selected
  if (lowercase || uppercase || numbers || special) {
     // Generate the password
    for (let i = 0; i < mdpQNT; i++) {
      password = password + CheckBoxOfCharacter(lowercase, uppercase, numbers,special);
    }
    pass.innerHTML = password;
  } else {
    // Print an error message if no character type was selected
    pass.innerHTML = "Your password must include at least one character type. Please try again.";
  }
}

  strong = document.getElementById("emoji");
  score = document.getElementById("score");
  score.innerHTML = text;
  getPassLenght=password.length

  let emojiMapping = {
    a: getPassLenght < 9,
    b: getPassLenght < 15,
    c: getPassLenght < 20,
    d: getPassLenght < 35,
    e: getPassLenght < 50,
    f: getPassLenght < 65,
    g: getPassLenght < 80,
    h: getPassLenght < 90,
    i: getPassLenght < 101,
  };
  
  fetch("emoji.json")
    .then((response) => response.json())
    .then((emoji) => {
      
      let key = Object.keys(emojiMapping).find((key) => emojiMapping[key]);
      if (key) {
        strong.innerHTML = emoji[key];
      }
    });
  }

function CheckBoxOfCharacter(lowercase, uppercase, numbers,special) {
  let character = "";
  
  if (lowercase === true) {character = character + "abcdefghijklmnopqrstuvwxyz";}
  if (uppercase === true) {character = character + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";}
  if (numbers === true) {character = character + "0123456789";}
  if (special === true) {character = character + " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";}

  character = character.charAt(Math.floor(Math.random() * character.length));

    return character;
}

//copy password
function copyMDP(e) {
  e.preventDefault();
  document.querySelector("#password").select();;
  document.execCommand("copy");
}
copyButton.addEventListener("click", copyMDP);


//textarea auto-resize
const tx = document.getElementsByTagName("textarea");
for (let i = 0; i < tx.length; i++) {
  tx[i].setAttribute("style", "height:" + (tx[i].scrollHeight) + "px;overflow-y:hidden;");
  tx[i].addEventListener("input", OnInput, false);
}

function OnInput() {
  this.style.height = 0;
  this.style.height = (this.scrollHeight) + "px";
}
