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
    alert("Please select at least one type of character for your password.")
    return charOptions();
  }  else {
    return [lower, upper, numb, spec];
  }
}

var characters = charOptions();

//Console log of resulting array
console.log(characters);

// Console log of resulting individual character choices
console.log("Lower case characters: " + characters[0]);
console.log("Upper case letters: " + characters[1]);
console.log("Numbers: " + characters[2]);
console.log("Special Characters: " + characters[3]);

// Create a full list of potential characters based on criteria provided by user
var charList = [];

if (characters[0]){
  charList = charList.concat(lowerCase);
}

if (characters[1]){
  charList = charList.concat(upperCase);
}

if (characters[2]){
  charList = charList.concat(numbers);
}

if (characters[3]){
  charList = charList.concat(specChars);
}

console.log("Full list of character options for this password: " + charList);

// Generate password based on randomly pulling number of characters requested by user and compiling them together.
var newPassword = "";

// for( var i = 0; i < length; i++ ) {
//   newPassword = newPassword.concat(Math.floor(Math.random() * charList.length));
// }

for( var i = 0; i < length; i++ ) {
  var choice = Math.floor(Math.random() * charList.length);
  newPassword = newPassword.concat(charList[choice]);
}

console.log("New Password: " + newPassword);

// var computer = Math.floor(Math.random() * choices.length);


return newPassword;
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