# 03 JavaScript: Password Generator

## Built out logic for the password generator in Javascript.

Below is a guide of how I built the logic for a random password generator. As an aspiring junior developer, my goal was to create a random password generator that would a generate randomized password according to input recieved from the user. The user was given options on length of password and what character types to include in their password. The password would then be displayed on the screen so that it could be copied by user. The css and html files were already built out.

-Listed variables that needed to be declared and used in the password generator function.

-Built out logic for recieving and storing input of desired password length from user

-Added prompt so user could enter their desired password length

-Added alerts if password did not meet length criteria. Password must be 8 to 128 characters long. If input did not meet this criteria, user was alerted to adjust their desired length.

-Added confirm prompts for what character types users would like to include in their password.

-Options for character types were lowercase letters, uppercase letters, numbers, and special symbols.

-Added alert to prompt user that they must include atleast 1 character type if user declined to include any of the listed character types in their password.

-Once all password criteria was collected from user, a string of characters was created and randomized.

-In order to make sure all data types were included, I listed the characters in a consistent order lowercase, uppercase, number, special. This caused the password length to be 4 times the requested length.

-I then sliced this string of charcters down to the character length requested by user.

-I then had to randomize this string of characters so that the password did not have a consistent order of character types.

-Finished password was return by function and displayed on the screen for the user.

Live link here! https://korbin-sargent.github.io/random-password-generator/

<img width="1437" alt="Screen Shot 2021-08-01 at 3 54 17 PM" src="https://user-images.githubusercontent.com/87394831/127786414-f16d8ac0-a65c-4307-8948-6fc4a83fbec3.png">

