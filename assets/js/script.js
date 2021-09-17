// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var password = "default";
  // prompt charcter length
  var characterLength = prompt("Please provide the required character length (Number must be between 8 and 128)");
  var badNumbar = (characterLength < 8)||(characterLength > 128);
  while (badNumbar) {
    characterLength = prompt("Error - Number must be between 8 and 128. Please provide the required character length");
    badNumbar = (characterLength < 8)||(characterLength > 128);
  }
  // prompt types of characters
  // validate character type select
  // generate password
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
