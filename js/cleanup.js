// Assignment Code
var generateBtn = document.querySelector("#generate");
password = "";

var lowerChar = "abcdefghijklmnopqrstuvwxyz";
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var speChar = "!@#$%^&*:;/?,.";
var number = "1234567890";

// var howManyCharNeeded = "";
// var needUpperChar = true;
// var needLowerChar = true;
// var needNumber = true;

function passParameters() {
  howManyCharNeededPrompt = prompt("How many characters do you need?");
  howManyCharNeeded = parseInt(howManyCharNeededPrompt, 10);
  // console.log(howManyCharNeeded);
  // dude = howManyCharNeeded - 8;
  // console.log(dude);
  needUpperChar = confirm("Do you want uppercase characters?");
  needLowerChar = confirm("Do you want lowercase letters?");
  needSpeChar = confirm("Do you want special characters?");
  needNumber = confirm("Do you want numbers?");
}

generateBtn.addEventListener("click", passParameters);

//var typesOfChar = [lowerChar,upperChar,speChar,number];
//function randomTypeOfChar() {
//    return Math.floor(Math.random() * 4);
//}

function generatePassword() {
	var typesOfChar = [];
	var numOfTypes = 0;
	if (needUpperChar === true) {
		typesOfChar.push(upperChar);
		numOfTypes++;
	}
	if (needLowerChar === true) {
		typesOfChar.push(lowerChar);
		numOfTypes++;
	}
	if (needSpeChar === true) {
		typesOfChar.push(speChar);
		numOfTypes++;
	}
	if (needNumber === true) {
		typesOfChar.push(number)
		numOfTypes++;
	}
	var password = "";
	for (i = 0; i < howManyCharNeeded; i++) {
		var typeNum = Math.floor(Math.random() * numOfTypes);
		var type = typesOfChar[typeNum];
		var randomChar = type.charAt(Math.floor(Math.random() * type.length) );
    var passPiece = randomChar.toString();
    password += passPiece;
	}
	return password;
}



// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
