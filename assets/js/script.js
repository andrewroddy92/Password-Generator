// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var password = "";
  // prompt charcter length
  var characterLength = prompt("Please provide the required character length (Number must be between 8 and 128)");
  var badNumber = (characterLength < 8)||(characterLength > 128);
  while (badNumber) {
    characterLength = prompt("Error - Number must be between 8 and 128. Please provide the required character length");
    badNumber = (characterLength < 8)||(characterLength > 128);
  }
  // prompt types of characters
  // validate character type select
  // generate password
  var charactersUpper = [...Array(26)].map((val, i) => String.fromCharCode(i + 65));
  var charactersLower = charactersUpper.map(letter => letter.toLowerCase());
  var numbers = [...Array(10)].map((val, i) => String.fromCharCode(i + 48));
  // TODO: ASK ABOUT THIS
  var characterSpecial = [...Array(9)].map((val, i) => String.fromCharCode(i + 33));
  var allCharacters = charactersUpper.concat(charactersLower).concat(characterSpecial).concat(numbers);
  for(var i=0; i < characterLength; i++){
    password = password.concat(allCharacters[Math.floor(Math.random() * allCharacters.length)]);
    
  }
 
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
