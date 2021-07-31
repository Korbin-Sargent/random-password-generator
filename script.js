// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var special = "`!@#$%^&*()?";
console.log(generateBtn);

//function runs to generate a password
function generatePassword() {
  //creating a string of characters that the user would like to use in their password
  var userSelected = "";
  var userLength = prompt(
    "Type a number between 8 and 128 to set your password character length"
  );
  //changes userLength from a string to a numeric value
  userLength = Number(userLength);
  if (userLength < 8) {
    alert("password length must be atleast 8 characters long");
    var userLength = prompt("Type a number between 8 and 128");
    userLength = Number(userLength);
  }
  if (userLength > 128) {
    alert("password length cannot exceed 128 characters long");
    var userLength = prompt("Type a number between 8 and 128");
    userLength = Number(userLength);
  }

  //if statement is adding lowercase characters to our variable userSelected
  //if user chooses to include lowercase letters
  var hasLowercase = confirm("Would you like to include lowercase numbers?");
  if (hasLowercase) {
    userSelected = userSelected + lowercase;
  }
  console.log(userSelected);

  //includes upper clase letters if user chooses to include on confirm pop up
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

  // result += userSelected.charAt(Math.floor(Math.random() * userLength));
  var result = " ";
  for (var i = 0; i < userLength; i++) {
    result += userSelected.charAt(Math.floor(Math.random() * userLength));
  }

  //this is where we actually generate the password. Use a loop
  //what type of loop, how many times to loop, how to get random character from a string
  //random index selection
  return result;
}
// Write password to the #password input
function writePassword() {
  //declares variable as password as the function generate password.
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
