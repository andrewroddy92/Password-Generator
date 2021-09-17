var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var password = "";
  var characterLength = prompt("Please provide the required character length (Number must be between 8 and 128)");
  var badNumber = (characterLength < 8)||(characterLength > 128);
  while (badNumber) {
    characterLength = prompt("Error: Number must be between 8 and 128. Please provide the required character length");
    badNumber = (characterLength < 8)||(characterLength > 128);
  }

  // prompt types of characters
  var noSelections = true
  while (noSelections) {
    var characterTypeUpper = confirm("Does your password require Uppercase letters");
    var characterTypeLower = confirm("Does your password require Lowercase letters");
    var characterTypeNumber = confirm("Does your password require Numbers");
    var characterTypeSpecial = confirm("Does your password require Special Characters");
    if (characterTypeUpper||characterTypeLower||characterTypeNumber||characterTypeSpecial) { 
      noSelections = false
    } else {
     alert("Error: No parameters selected")
    }
  }


  // Character Arrays
  var charactersUpper = [...Array(26)].map((val, i) => String.fromCharCode(i + 65));
  var charactersLower = charactersUpper.map(letter => letter.toLowerCase());
  var numbers = [...Array(10)].map((val, i) => String.fromCharCode(i + 48));
  var characterSpecial = [...Array(9)].map((val, i) => String.fromCharCode(i + 33));
  var allCharacters = [];
  var counter = 0

  if (characterTypeUpper) {
    allCharacters = allCharacters.concat(charactersUpper);
    password = password.concat(charactersUpper[Math.floor(Math.random() * charactersUpper.length)]);
    counter++;
  };

  if (characterTypeLower) {
    allCharacters = allCharacters.concat(charactersLower);
    password = password.concat(charactersLower[Math.floor(Math.random() * charactersLower.length)]);
    counter++;
  };

  if (characterTypeNumber) {
    allCharacters = allCharacters.concat(numbers);
    password = password.concat(numbers[Math.floor(Math.random() * numbers.length)]);
    counter++;
  };

  if (characterTypeSpecial) {
    allCharacters = allCharacters.concat(characterSpecial);
    password = password.concat(characterSpecial[Math.floor(Math.random() * characterSpecial.length)]);
    counter++;
  };

  for(var i=0; i < (characterLength - counter); i++){
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
