// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var special = "`!@#$%^&*()?";
console.log(generateBtn);

//function runs to generate a password - need to possibly make
//loop to prevent
function generatePassword() {
  //creating a string of characters that the user would like to use in their password
  var userSelected = "";
  var userLength = prompt(
    "Type a number between 8 and 128 to set your password character length"
  );
  //changes userLength from a string to a numeric value
  userLength = Number(userLength);

  //if statement to ensure user enters a number 8 through 128. If not, an alert will
  // pop up stating the error and the generatePassword function will start over again.
  if (userLength < 8) {
    alert("Password length must be atleast 8 characters long.");
    return generatePassword();
  }
  console.log(typeof userLength);

  if (userLength > 128) {
    alert("Password length cannot exceed 128 characters in length.");
    return generatePassword();
  }
  //if statement is adding lowercase characters to our variable userSelected
  //if user chooses to include lowercase letters
  var hasLowercase = confirm("Would you like to include lowercase letters?");
  if (hasLowercase) {
    userSelected = userSelected + lowercase;
  }
  //includes upper clase letters if user chooses to include on confirm pop up
  var hasUppercase = confirm("Would you like to include uppercase letters?");
  if (hasUppercase) {
    userSelected = userSelected + uppercase;
  }

  var hasNumber = confirm("Would you like to include numbers?");
  if (hasNumber) {
    userSelected = userSelected + number;
  }
  //User has the option to add special characters to their randomly generated password.
  var hasSpecial = confirm("Would you like to include special characters?");
  if (hasSpecial) {
    userSelected = userSelected + special;
  }
  //this for loop chooses random characters from the userSelected
  //character string to generates password
  var result = " ";
  for (var i = 0; i < userLength; i++) {
    result += userSelected.charAt(Math.floor(Math.random() * userLength));
  }
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
