// Assignment Code
var generateBtn = document.querySelector("#generate");

//Validate the user input
function getPasswordOptions(userNumCharacters) {
  if (isNaN(userNumCharacters)) {
    alert("Please enter a valid number.");
    return false;
  } else if (parseInt(userNumCharacters) < 8) {
    alert("Password length must be at least 8 characters.");
    return false;
  } else if (parseInt(userNumCharacters) >= 128) {
    alert("Password must be less than 129 characters.");
    return false;
  }
  return true;
}

//Get random characters from each type of character
function getRandomElementFromArray(collection) {
  return collection[Math.floor(Math.random() * collection.length)];
}

//Function prompting all password options
function generatePassword() {
  var userNumCharacters = prompt(
    "How many characters do you want your password to contain? (Between 8 and 128 )"
  );
  var passwordValid = getPasswordOptions(userNumCharacters);
  if (passwordValid) {
    var hasSpecialCharacters = confirm(
      "Click OK to confirm special characters."
    );
    var hasNumbers = confirm("Click OK to confirm adding numeric characters.");
    var hasLowerCase = confirm(
      "Click OK to confirm adding lowercase characters."
    );
    var hasUpperCase = confirm(
      "Click OK to confirm including uppercase characters."
    );
  }
  //Conditional statement to check if none of the types of characters are chosen. Password generator ends if every variable is false
  if (
    [hasSpecialCharacters, hasNumbers, hasLowerCase, hasUpperCase].includes(
      true
    )
  )
    //Array to store types of characters for password
    var chosenChar = [];

  //Array to contain one of each type of chosen character
  var guaranteedChar = [];

  //Conditional statements that add array of each type of character into array of possible characters based selected inputs and pushes new random character to guaranteedCharacters.
  if (hasSpecialCharacters) {
    chosenChar = chosenChar.concat(specialCharacters);
    guaranteedChar.push(
      specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
    );
  }
  if (hasNumbers) {
    chosenChar = chosenChar.concat(numericCharacters);
    guaranteedChar.push(
      numericCharacters[Math.floor(Math.random() * numericCharacters.length)]
    );
  }
  if (hasLowerCase) {
    chosenChar = chosenChar.concat(lowerCasedCharacters);
    guaranteedChar.push(
      lowerCasedCharacters[
        Math.floor(Math.random() * lowerCasedCharacters.length)
      ]
    );
  }
  if (hasUpperCase) {
    chosenChar = chosenChar.concat(upperCasedCharacters);
    guaranteedChar.push(
      upperCasedCharacters[
        Math.floor(Math.random() * upperCasedCharacters.length)
      ]
    );
  }

  //For loop to iterate over the password length from the options object, selecting random indices from the array of possible characters then turning those characters into the result variable
  var randomChar = [];
  for (var i = 0; i < userNumCharacters; i++) {
    var index = Math.floor(Math.random() * chosenChar.length);
    randomChar.push(chosenChar[index]);
  }
  var replacedPosition = {};
  //While loop to check that an index position that has already been replaced with a guaranteed character is not replaced with another guaranteed character
  while (guaranteedChar.length > 0) {
    var replaceChar = Math.floor(Math.random() * randomChar.length);
    if (!replacedPosition[replaceChar]) {
      randomChar[replaceChar] = guaranteedChar.pop();
      replacedPosition[replaceChar] = true;
    }
  }
  return randomChar.join("");
}

// // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Array of special characters for password
var specialCharacters = [
  "@",
  "%",
  "+",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  "~",
  "-",
  "_",
  ".",
];
// Array of numbers for password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase letters for password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters for password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
