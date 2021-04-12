var generateBtn = document.querySelector("#generate");
password = "";

var lowerChar = "abcdefghijklmnopqrstuvwxyz";
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var speChar = "!@#$%^&*:;/?,.";
var number = "1234567890";


function passParameters() {
  // howManyCharNeeded = 8;
  howManyCharNeededPrompt = prompt("How many characters do you need?");
  howManyCharNeeded = parseInt(howManyCharNeededPrompt, 10);
  needUpperChar = confirm("Do you want uppercase characters?");
  needLowerChar = confirm("Do you want lowercase letters?");
  needSpeChar = confirm("Do you want special characters?");
  needNumber = confirm("Do you want numbers?");
  
}

generateBtn.addEventListener("click", passParameters);

function generatePassword() {
  var password = "";
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
	for (i = 0; i < howManyCharNeeded; i++) {
		var typeNum = Math.floor(Math.random() * numOfTypes);
		var type = typesOfChar[typeNum];
		var randomChar = type.charAt(Math.floor(Math.random() * type.length) );
    var passPiece = randomChar.toString();
    password += passPiece;
	}
	return password;
}

function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
