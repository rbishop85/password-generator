function generatePassword(){

// Create variable for each type of password character and then splits them into separate array values.

var numbers = "0123456789".split("");
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var specChars = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~".split("");

// Function that asks user for password length, then notifies if the length isn't correct or isn't in numbers.
// Finally the excepted value is returned and set as the length variable.
function passLength(){
  var length = prompt("Please enter required password length. (From 8 to 128)");
  if (length < 8 || length > 128 || isNaN(length)){
    alert("Please select a length between 8 and 128");
    return passLength();
  }  else {
      return length;
     }
}

var length = passLength();

// Console log of length value retrieved from the function
console.log("Password length is " + length + " characters.");

// Function to ask user what types of characters they want, forcing them to try again if they select none, then spit out all results as an array
function charOptions(){
  var lower = confirm("Does your password require lower case letters?");
  var upper = confirm("Does your password require upper case letters?");
  var numb = confirm("Does your password require numbers?");
  var spec = confirm("Does your password require special characters?");
  if (!lower && !upper && !numb && !spec){
    alert("You must select at least 1 type of character for your password.  Please try again.")
    return charOptions();
  }  else {
    return [lower, upper, numb, spec];
  }
}

var characters = charOptions();

//Console log of resulting array
console.log(characters);

// Splitting resulting array back into individual values
var lower = characters[0];
var upper = characters[1];
var numb = characters[2];
var spec = characters[3];

// Console log of resulting individual character choices
console.log("Lower case characters: " + lower);
console.log("Upper case letters: " + upper);
console.log("Numbers: " + numb);
console.log("Special Characters: " + spec);



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