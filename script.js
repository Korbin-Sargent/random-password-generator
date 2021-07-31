// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var special = "`!@#$%^&*()?";
console.log(generateBtn);

//function runs
function generatePassword() {
  //creating a sting of characters that the user would like to use in their password
  var userSelected = "";
  var userLength = prompt("Type a number between 8 and 128");
  console.log(userLength);
  var hasLowercase = confirm("Would you like to include lowercase numbers?");
  //if statement is adding lowercase characters to our variable userSelected
  //if user chooses to include lowercase letters
  if (hasLowercase) {
    userSelected = userSelected + lowercase;
  }
  console.log(userSelected);

  var hasUppercase = confirm("Would you like to include uppercase letters?");
  if (hasUppercase) {
    userSelected = userSelected + uppercase;
  }
  console.log(userSelected);

  var hasNumber = confirm("Would you like to include numbers?");
  if (hasNumber) {
    userSelected = userSelected + number;
  }
  console.log(userSelected);

  var hasSpecial = confirm("Would you like to include special characters?");
  if (hasSpecial) {
    userSelected = userSelected + special;
  }

  console.log(userSelected);

  //this is where we actually generate the password. Use a loop
  //what type of loop, how many times to loop, how to get random character from a string
  //random index selection

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
