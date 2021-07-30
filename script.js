// Assignment Code
var generateBtn = document.querySelector("#generate");
console.log(generateBtn);

function generatePassword() {
  var userlength = prompt("Type a number between 8 and 128");
  console.log(userlength);

  return;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
