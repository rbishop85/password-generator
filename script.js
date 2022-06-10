function generatePassword(){

// Create variable for each type of password character and then splits them into separate array values.

var numbers = "0123456789".split("");
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var specChars = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~".split("");

// Prompts for user input on Password requirements, checks against length criteria and stores response in variable.

function passLength(){
  var length = prompt("Please enter required password length. (From 8 to 128)");
  if (length < 8 || length > 128 || isNaN(length)){
    alert("Please select a length between 8 and 128");
    return passLength();
  }   else {
      return length;
     }
}

length = passLength();

console.log("Password length is " + length + " characters.");

// var lower = confirm("Does your password require lower case letters?");
// var upper = confirm("Does your password require upper case letters?");
// var numb = confirm("Does your password require numbers?");
// var spec = confirm("Does your password require special characters?");


// Console logs to verify entries

// console.log("Lower case letters required: " + lower + ".");
// console.log("Upper case letters required: " + upper + ".");
// console.log("Numbers required: " + lower + ".");
// console.log("Special characters required: " + lower + ".");



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