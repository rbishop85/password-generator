function generatePassword(){

// Create variable for each type of password character and then splits them into separate array values.

var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numbers = "0123456789".split("");
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

// Console log of resulting individual character choices
console.log("Lower case characters: " + characters[0]);
console.log("Upper case letters: " + characters[1]);
console.log("Numbers: " + characters[2]);
console.log("Special Characters: " + characters[3]);

// 
var charArray = [];

if (characters[0]){
  charArray = charArray.concat(lowerCase);
}

if (characters[1]){
  charArray = charArray.concat(upperCase);
}

if (characters[2]){
  charArray = charArray.concat(numbers);
}

if (characters[3]){
  charArray = charArray.concat(specChars);
}

console.log("Full list of character options for this password: " + charArray);

// Generate password based on randomly pulling number of characters requested by user and compiling them together.
var newPassword = "";

for( var i = 0; i < length; i++ ) {
  var choice = Math.floor(Math.random() * charArray.length);
  newPassword = newPassword.concat(charArray[choice]);
}

console.log(newPassword);


// Testing password validation

var containL = lowerCase.some(element => {
  if (newPassword.includes(element)) {
    return true;
  }
  return false;
});

console.log("Password includes lower case: " + containL);

var containU = upperCase.some(element => {
  if (newPassword.includes(element)) {
    return true;
  }
  return false;
});

console.log("Password includes upper case: " + containU);

var containN = numbers.some(element => {
  if (newPassword.includes(element)) {
    return true;
  }
  return false;
});

console.log("Password includes numbers: " + containN);

var containS = specChars.some(element => {
  if (newPassword.includes(element)) {
    return true;
  }
  return false;
});

console.log("Password includes special characters: " + containS);


var passwordCheck = (containL === characters[0] && containU === characters[1] && containN === characters[2] && containS === characters[3]);

console.log(passwordCheck);



//




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