function generatePassword(){

// Create variable for each type of password character and then splits them into separate array values.
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numbers = "0123456789".split("");
var specChars = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~".split("");

// Function that asks user for password length, then notifies if the length isn't correct or isn't a real number.  Then outputs that chosen number
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

// Function to ask user what types of characters they want, forcing them to try again if they select none, then spit out all results as an array
var characters = charOptions();

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

// ** Console log of all password parameters requested by user
// console.log("User requested password features:")
// console.log("");
// console.log("Password length: " + length + " characters.");
// console.log("Lower case characters: " + characters[0]);
// console.log("Upper case letters: " + characters[1]);
// console.log("Numbers: " + characters[2]);
// console.log("Special Characters: " + characters[3]);
// console.log("");

// Creating character array based on all character options selected
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

// ** Log of full array created based on user requests
// console.log("Full list of character options for this password: " + charArray);
// console.log("");

// Generate password based on randomly pulling number of characters requested by user from chracter array and compiling them together.
var newPassword = createPass();

function createPass(){
  var newPassword = "";
  for( var i = 0; i < length; i++ ) {
    var choice = Math.floor(Math.random() * charArray.length);
    newPassword = newPassword.concat(charArray[choice]);
  }

  // Checking output password vs all character lists
  var containL = lowerCase.some(element => {
    if (newPassword.includes(element)) {
    return true;
    }
    return false;
  });

  var containU = upperCase.some(element => {
    if (newPassword.includes(element)) {
    return true;
    }
    return false;
  });

  var containN = numbers.some(element => {
    if (newPassword.includes(element)) {
    return true;
    }
    return false;
  });

  var containS = specChars.some(element => {
    if (newPassword.includes(element)) {
    return true;
    }
    return false;
  });

  // ** Log of output comparison
  // console.log("Password includes lower case: " + containL);
  // console.log("Password includes upper case: " + containU);
  // console.log("Password includes numbers: " + containN);
  // console.log("Password includes special characters: " + containS);

  // Checking output comparison vs choices requested by user
  var passwordCheck = (containL === characters[0] && containU === characters[1] && containN === characters[2] && containS === characters[3]);

  // ** Logging if output comparison matched all user choices
  // console.log("Password met all criteria: " + passwordCheck);
  
  // If generated password didn't meet all criteria requested, then rerun password generation, If it did then output the password
  if(!passwordCheck){
    // console.log("Password did not meet all criteria, re-generating...");
    // console.log("");
    return createPass();
  } else {
    return newPassword;
  }
}


// Final output of the password, ending the function and allowing the pre-written code to finish up by sending the password to the webpage display
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