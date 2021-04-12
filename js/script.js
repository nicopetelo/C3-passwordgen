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
    // all characters allowed
    if (needUpperChar === true && needLowerChar === true 
        && needNumber === true && needSpeChar === true) {
            var typesOfChar = [lowerChar,upperChar,speChar,number];
            function randomTypeOfChar() {
              return Math.floor(Math.random() * 4);
            }
            for (i = 0; i < howManyCharNeeded; i++) {
                typeNum = randomTypeOfChar();
                type = typesOfChar[typeNum];
                randomChar = type.charAt(Math.floor(Math.random() * type.length) );
                passPiece = randomChar.toString();
                password += passPiece;
            }
            return password;
        }
    
    // no numbers
    if (needUpperChar === true && needLowerChar === true 
      && needNumber === false && needSpeChar === true) {
          var typesOfChar = [lowerChar,upperChar,speChar];
          function randomTypeOfChar() {
            return Math.floor(Math.random() * 3);
          }
          for (i = 0; i < howManyCharNeeded; i++) {
              typeNum = randomTypeOfChar();
              type = typesOfChar[typeNum];
              randomChar = type.charAt(Math.floor(Math.random() * type.length) );
              passPiece = randomChar.toString();
              password += passPiece;
          }
          return password;
      }
    // no speChar
    if (needUpperChar === true && needLowerChar === true 
      && needNumber === true && needSpeChar === false) {
          var typesOfChar = [lowerChar,upperChar,number];
          function randomTypeOfChar() {
            return Math.floor(Math.random() * 3);
          }
          for (i = 0; i < howManyCharNeeded; i++) {
              typeNum = randomTypeOfChar();
              type = typesOfChar[typeNum];
              randomChar = type.charAt(Math.floor(Math.random() * type.length) );
              passPiece = randomChar.toString();
              password += passPiece;
          }
          return password;
        }
    // no speChar or numbers
    if (needUpperChar === true && needLowerChar === true 
      && needNumber === false && needSpeChar === false) {
          var typesOfChar = [lowerChar,upperChar];
          function randomTypeOfChar() {
            return Math.floor(Math.random() * 2);
          }
          for (i = 0; i < howManyCharNeeded; i++) {
              typeNum = randomTypeOfChar();
              type = typesOfChar[typeNum];
              randomChar = type.charAt(Math.floor(Math.random() * type.length) );
              passPiece = randomChar.toString();
              password += passPiece;
          }
          return password;
      }
    // no speChar or numbers or uppercase
    if (needUpperChar === false && needLowerChar === true 
      && needNumber === false && needSpeChar === false) {
          var typesOfChar = [lowerChar];
          function randomTypeOfChar() {
            return Math.floor(Math.random() * 1);
          }
          for (i = 0; i < howManyCharNeeded; i++) {
              typeNum = randomTypeOfChar();
              type = typesOfChar[typeNum];
              randomChar = type.charAt(Math.floor(Math.random() * type.length) );
              passPiece = randomChar.toString();
              password += passPiece;
          }
          return password;
      }
    // no speChar or numbers or lowercase
    if (needUpperChar === true && needLowerChar === false 
      && needNumber === false && needSpeChar === false) {
          var typesOfChar = [upperChar];
          function randomTypeOfChar() {
            return Math.floor(Math.random() * 1);
          }
          for (i = 0; i < howManyCharNeeded; i++) {
              typeNum = randomTypeOfChar();
              type = typesOfChar[typeNum];
              randomChar = type.charAt(Math.floor(Math.random() * type.length) );
              passPiece = randomChar.toString();
              password += passPiece;
          }
          return password;
      }
    // no uppercase or numbers or lowercase
    if (needUpperChar === false && needLowerChar === false 
      && needNumber === false && needSpeChar === true) {
          var typesOfChar = [speChar];
          function randomTypeOfChar() {
            return Math.floor(Math.random() * 1);
          }
          for (i = 0; i < howManyCharNeeded; i++) {
              typeNum = randomTypeOfChar();
              type = typesOfChar[typeNum];
              randomChar = type.charAt(Math.floor(Math.random() * type.length) );
              passPiece = randomChar.toString();
              password += passPiece;
          }
          return password;
      }
    // no uppercase or speChar or lowercase
    if (needUpperChar === false && needLowerChar === false 
      && needNumber === true && needSpeChar === false) {
          var typesOfChar = [number];
          function randomTypeOfChar() {
            return Math.floor(Math.random() * 1);
          }
          for (i = 0; i < howManyCharNeeded; i++) {
              typeNum = randomTypeOfChar();
              type = typesOfChar[typeNum];
              randomChar = type.charAt(Math.floor(Math.random() * type.length) );
              passPiece = randomChar.toString();
              password += passPiece;
          }
          return password;
      }
    // no lowercase
    if (needUpperChar === true && needLowerChar === false 
      && needNumber === true && needSpeChar === true) {
          var typesOfChar = [upperChar, speChar, number];
          function randomTypeOfChar() {
            return Math.floor(Math.random() * 3);
          }
          for (i = 0; i < howManyCharNeeded; i++) {
              typeNum = randomTypeOfChar();
              type = typesOfChar[typeNum];
              randomChar = type.charAt(Math.floor(Math.random() * type.length) );
              passPiece = randomChar.toString();
              password += passPiece;
          }
          return password;
      }
    // no upper
    if (needUpperChar === false && needLowerChar === true 
      && needNumber === true && needSpeChar === true) {
          var typesOfChar = [lowerChar, speChar, number];
          function randomTypeOfChar() {
            return Math.floor(Math.random() * 3);
          }
          for (i = 0; i < howManyCharNeeded; i++) {
              typeNum = randomTypeOfChar();
              type = typesOfChar[typeNum];
              randomChar = type.charAt(Math.floor(Math.random() * type.length) );
              passPiece = randomChar.toString();
              password += passPiece;
          }
          return password;
      }
}

// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
