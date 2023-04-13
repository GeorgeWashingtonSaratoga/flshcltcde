// Letter-to-Number Mapping
const letterToNumber = {
    'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5, 'F': 6, 'G': 7, 'H': 8, 'I': 9,
    'J': 10, 'K': 11, 'L': 12, 'M': 13, 'N': 14, 'O': 15, 'P': 16, 'Q': 17,
    'R': 18, 'S': 19, 'T': 20, 'U': 21, 'V': 22, 'W': 23, 'X': 24, 'Y': 25, 'Z': 26
};
  
  // Number-to-Letter Mapping
  const numberToLetter = {
    1: 'A', 2: 'B', 3: 'C', 4: 'D', 5: 'E', 6: 'F', 7: 'G', 8: 'H', 9: 'I',
    10: 'J', 11: 'K', 12: 'L', 13: 'M', 14: 'N', 15: 'O', 16: 'P', 17: 'Q',
    18: 'R', 19: 'S', 20: 'T', 21: 'U', 22: 'V', 23: 'W', 24: 'X', 25: 'Y', 26: 'Z'
};

var message = document.getElementById("Message")
var encodedMessage = document.getElementById("Encoded Message")
var encodeText = document.getElementById("encoder")
var decodeText = document.getElementById("decoder")
var startEn = document.getElementById("encode")
var startDe = document.getElementById("decode")
var finalEn = document.getElementById("finalEn")
var finalDe = document.getElementById("finalDe")

function encode(inputString) {
      // Convert string to octal ASCII
  let octalString = '';
  for (let i = 0; i < inputString.length; i++) {
    let octalCode = inputString.charCodeAt(i).toString(8);
    if (octalCode.length === 2) {
      octalCode = '0' + octalCode;
    } else if (octalCode.length === 1) {
      octalCode = '00' + octalCode;
    }
    octalString += octalCode + ' ';
  }
  octalString = octalString.trim();

  console.log(octalString);

    // Convert octal ASCII to numbers and add 10 to each number
    let numbersArray = octalString.split(' ').map(octalCode => parseInt(octalCode, 8) + 10);

    // Convert back to octal ASCII string
    let manipulatedOctalString = '';
    for (let i = 0; i < numbersArray.length; i++) {
    let octalCode = (numbersArray[i] - 2).toString(8);
    if (octalCode.length === 2) {
        octalCode = '0' + octalCode;
    } else if (octalCode.length === 1) {
        octalCode = '00' + octalCode;
    }
    manipulatedOctalString += octalCode + ' ';
    }
    manipulatedOctalString = manipulatedOctalString.trim();

    console.log(manipulatedOctalString);

  // Convert back to string and separate into groups of 5 characters
  let stringFromOctal = '';
  let manipulatedOctalArray = manipulatedOctalString.split(' ');
  for (let i = 0; i < manipulatedOctalArray.length; i++) {
    let charCode = parseInt(manipulatedOctalArray[i], 8);
    stringFromOctal += String.fromCharCode(charCode);
  }
  let groupedString = '';
  for (let i = 0; i < stringFromOctal.length; i += 5) {
    groupedString += stringFromOctal.substr(i, 5) + ' ';
  }
  groupedString = groupedString.trim();
  console.log(groupedString);
  // Switch first and last characters of each group
  let switchedString = '';
  let groups = groupedString.split(' ');
  for (let i = 0; i < groups.length; i++) {
    let group = groups[i];
    let firstChar = group[0];
    let lastChar = group[group.length - 1];
    let middleChars = group.substring(1, group.length - 1);
    if (group.length > 1) {
    switchedString += lastChar + middleChars + firstChar + ' ';
    } else {
        switchedString += firstChar
    }
  }
  switchedString = switchedString.trim();

  console.log(switchedString);

    // Remove every 6th character
    let deletedString = '';
    for (let i = 0; i < switchedString.length; i++) {
      if ((i+1) % 6 !== 0) {
        deletedString += switchedString[i];
      }
    }
    console.log(deletedString);
  
    // Replace spaces with underscores
    let replacedString = deletedString.replaceAll('', '_');
  
    console.log(replacedString);

  // Regroup and return final string
  let finalString = '';
  for (let i = 0; i < replacedString.length; i += 15) {
    finalString += replacedString.substr(i, 15);
  }
  finalString = finalString.trim();
  console.log(finalString);
  finalEn.textContent = finalString;
  return finalString;
}
  
function decode(inputString) {
  
    // Separate into groups of 5 characters
    let groupedString = '';
    for (let i = 0; i < inputString.length; i += 5) {
      groupedString += inputString.substr(i, 5) + ' ';
    }
    groupedString = groupedString.trim();
  
    // Switch first and last letters of each group
    let switchedString = '';
    let groups = groupedString.split(' ');
    for (let i = 0; i < groups.length; i++) {
      let group = groups[i];
      let firstChar = group[0];
      let lastChar = group[group.length - 1];
      let middleChars = group.substring(1, group.length - 1);
      if (group.length > 1) {
        switchedString += lastChar + middleChars + firstChar + ' ';
      } else {
        switchedString += firstChar
      }
    }
    switchedString = switchedString.trim();
  
    // Regroup and convert to octal ASCII
    let octalString = '';
    for (let i = 0; i < switchedString.length; i++) {
      octalString += switchedString.charCodeAt(i).toString(8) + ' ';
    }
    octalString = octalString.trim();
  
    // Convert octal ASCII to numbers and add 10 to each number
    let numbersArray = octalString.split(' ').map(octalCode => parseInt(octalCode, 8) - 10);
  
    // Convert back to octal ASCII string
    let manipulatedOctalString = '';
    for (let i = 0; i < numbersArray.length; i++) {
      let octalCode = (numbersArray[i] + 2).toString(8);
      if (octalCode.length === 2) {
        octalCode = '0' + octalCode;
      } else if (octalCode.length === 1) {
        octalCode = '00' + octalCode;
      }
      manipulatedOctalString += octalCode + ' ';
    }
    manipulatedOctalString = manipulatedOctalString.trim();

    manipulatedOctalString = manipulatedOctalString.replaceAll('030 ', '');

    console.log(manipulatedOctalString);
  
    // Remove null bytes
    manipulatedOctalString = manipulatedOctalString.replaceAll('000', '');

    // Convert octal ASCII to numbers and subtract 10 from each number
    let numbersArray2 = manipulatedOctalString.split(' ').map(octalCode => parseInt(octalCode, 8) +0);

    // Convert back to string
    let decodedString = "";
    for (let i = 0; i < numbersArray2.length; i++) {
    const charCode = numbersArray2[i];
    decodedString += String.fromCharCode(charCode);
    }

    console.log(decodedString);
        finalDe.textContent = decodedString;
        return decodedString;
}
encodeText.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(startEn)
    encode(String(message.value));
});

decodeText.addEventListener("submit", (e) => {
    e.preventDefault();
    decode(String(encodedMessage.value));
});