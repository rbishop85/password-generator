function generatePassword(){

    // Validate Password length and make sure it's a number between 8 and 128

// Create variable for each type of password character and then splits them into separate array values.
var numbers = "0123456789".split("");
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var specChars = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~".split("");

// Console Logs to verify
console.log(numbers);
console.log(lowerCase);
console.log(upperCase);
console.log(specChars);

// Prompts for user input on Password requirements and stores response in variable.
var passLength = prompt("Please enter required password length. (From 8 to 128) ");
var lower = confirm("Does your password require lower case letters?");
var upper = confirm("Does your password require upper case letters?");
var numb = confirm("Does your password require numbers?");
var spec = confirm("Does your password require special characters?");


// Console logs to verify entries
console.log("Password length is " + passLength + " characters.");
console.log("Lower case letters required: " + lower + ".");
console.log("Upper case letters required: " + upper + ".");
console.log("Numbers required: " + lower + ".");
console.log("Special characters required: " + lower + ".");


  // splits the individual characters into standalone variables in the array

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat


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
