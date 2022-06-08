function generatePassword(){
 
  // Prompt user for password length and store in variable
    // Validate Password length and make sure it's a number between 8 and 128
  // Prompt user for need for special characters and store in boolean variable
  // 

// numbers
var numbers = "0123456789".split("");
console.log(numbers);
// lowercase letters
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
console.log(lowerCase);
// uppercase letters
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
console.log(upperCase);
// special characters
var specChars = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~".split("");
console.log(specChars);


  // splits the individual characters into standalone variables in the array

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat

//
}


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
