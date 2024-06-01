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
var noise = document.getElementById("noise")
var encodeText = document.getElementById("encoder")
var decodeText = document.getElementById("decoder")
var talkText = document.getElementById("talker")
var startEn = document.getElementById("encode")
var startDe = document.getElementById("decode")
var startLario = document.getElementById("lario")
var finalEn = document.getElementById("finalEn")
var finalDe = document.getElementById("finalDe")
var neilWord = document.getElementById("neilWord")
var versionT = document.getElementById("versionT")

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
function intData(inputString) {
      // Extract the letter and numbers from the input string
  const letter = inputString[0];
  var numbers = inputString.slice(1);
  
  // Set up base sentences for each letter
  let baseSentence;
  switch (letter) {
    case 'G':
      baseSentence = 'You should ____ ____ on ____ ____, my ____';
      break;
    case 'W':
      baseSentence = 'Once, I decided to ____ ____ on ____ ____. Tis a wise choice, ____';
      break;
    case 'A':
      baseSentence = 'Clearly, to ____ on the behalf of ____ during ____ ____ is the answer. Remember this, ____.';
      break;
    default:
      return 'Invalid input!';
  }
  
  // Create arrays of words to fill in the blanks based on the numbers
  const words1 = ['like, groove to', 'save', 'help', 'watch'];
  const words2 = ['a cat', 'a flower', 'a pen', 'my music'];
  const words3 = ['a Tuesday', 'a Thursday', 'Halloween', 'Valentines Day'];
  const words4 = ['this year', 'next year', 'next decade', 'in 3 years'];
  const words5 = ['buddy', 'pal', 'amigo', 'chum'];
  
  let wordsArray;
  numbers = numbers.split(' ');
  wordsArray = [words1[numbers[numbers.length - 5]], words2[numbers[numbers.length - 4]], words3[numbers[numbers.length - 3]], words4[numbers[numbers.length - 2]], words5[numbers[numbers.length - 1]]];

  for (var i = 0; i < wordsArray.length; i++) {
    baseSentence = baseSentence.replace('____', wordsArray[i]);
    
    }
neilWord.textContent = baseSentence;
}


function processImage(file, callback, seed) {
  const reader = new FileReader();
  reader.onload = function(event) {
      const img = new Image();
      img.src = event.target.result;
      img.onload = function() {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          canvas.width = img.width;
          canvas.height = img.height;
          ctx.drawImage(img, 0, 0);
          const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
          callback(imageData, canvas, seed);
      }
  }
  reader.readAsDataURL(file);
}

function encodeImage(imageData, canvas, seed) {
  const [blockSizeSeed, swapCountSeed, hueShiftSeed, swapSeed] = parseSeed(seed);
  const data = imageData.data;
  const blockSize = (blockSizeSeed % 10) + 1;
  const swapCount = (swapCountSeed % 10) + 1;
  const hueShiftAmount = (hueShiftSeed % 360);
  const swapRng = seedRandom(swapSeed);

  for (let i = 0; i < data.length; i += blockSize * 4) {
      const block = [];
      for (let j = 0; j < blockSize; j++) {
          if (i + j * 4 < data.length) {
              block.push(i + j * 4);
          }
      }
      for (let j = 0; j < swapCount; j++) {
          swapRandomPixels(data, block, swapRng);
      }
      for (let j = 0; j < block.length; j++) {
          hueShift(data, block[j], hueShiftAmount);
      }
  }

  canvas.getContext('2d').putImageData(imageData, 0, 0);
  const encodedImageUrl = canvas.toDataURL();
  document.getElementById('encodedImage').src = encodedImageUrl;
}

function decodeImage(imageData, canvas, seed) {
  const [blockSizeSeed, swapCountSeed, hueShiftSeed, swapSeed] = parseSeed(seed);
  const data = imageData.data;
  const blockSize = (blockSizeSeed % 10) + 1;
  const swapCount = (swapCountSeed % 10) + 1;
  const hueShiftAmount = (hueShiftSeed % 360);
  const swapRng = seedRandom(swapSeed);

  for (let i = 0; i < data.length; i += blockSize * 4) {
      const block = [];
      for (let j = 0; j < blockSize; j++) {
          if (i + j * 4 < data.length) {
              block.push(i + j * 4);
          }
      }
      for (let j = swapCount - 1; j >= 0; j--) {
          swapRandomPixels(data, block, swapRng);
      }
      for (let j = 0; j < block.length; j++) {
          hueShift(data, block[j], -hueShiftAmount);
      }
  }

  canvas.getContext('2d').putImageData(imageData, 0, 0);
  const decodedImageUrl = canvas.toDataURL();
  document.getElementById('decodedImage').src = decodedImageUrl;
}

function hueShift(data, index, shift) {
  const r = data[index];
  const g = data[index + 1];
  const b = data[index + 2];

  const hsv = rgbToHsv(r, g, b);
  hsv[0] = (hsv[0] + shift) % 360;
  const rgb = hsvToRgb(hsv[0], hsv[1], hsv[2]);

  data[index] = rgb[0];
  data[index + 1] = rgb[1];
  data[index + 2] = rgb[2];
}

function swapRandomPixels(data, block, rng) {
  const idx1 = Math.floor(rng() * block.length);
  const idx2 = Math.floor(rng() * block.length);
  swapPixels(data, block[idx1], block[idx2]);
}

function swapPixels(data, index1, index2) {
  for (let i = 0; i < 4; i++) {
      const temp = data[index1 + i];
      data[index1 + i] = data[index2 + i];
      data[index2 + i] = temp;
  }
}

function rgbToHsv(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const delta = max - min;

  let h = 0;
  let s = 0;
  let v = max;

  if (delta !== 0) {
      s = delta / max;

      switch (max) {
          case r:
              h = ((g - b) / delta + (g < b ? 6 : 0)) % 6;
              break;
          case g:
              h = ((b - r) / delta + 2) % 6;
              break;
          case b:
              h = ((r - g) / delta + 4) % 6;
              break;
      }

      h *= 60;
  }

  return [h, s, v];
}

function hsvToRgb(h, s, v) {
  const c = v * s;
  const x = c * (1 - Math.abs((h / 60) % 2 - 1));
  const m = v - c;

  let rgb = [0, 0, 0];

  if (h < 60) {
      rgb = [c, x, 0];
  } else if (h < 120) {
      rgb = [x, c, 0];
  } else if (h < 180) {
      rgb = [0, c, x];
  } else if (h < 240) {
      rgb = [0, x, c];
  } else if (h < 300) {
      rgb = [x, 0, c];
  } else {
      rgb = [c, 0, x];
  }

  return rgb.map(value => Math.round((value + m) * 255));
}

function parseSeed(seed) {
  const seeds = seed.split(',').map(Number);
  if (seeds.length !== 4) throw new Error('Seed must contain four parts separated by commas');
  return seeds;
}

function seedRandom(seed) {
  let x = Math.sin(seed) * 10000;
  return function() {
      x = Math.sin(x) * 10000;
      return x - Math.floor(x);
  };
}


versionT.textContent = "Version: 0.1";

encodeText.addEventListener("submit", (e) => {
    e.preventDefault();
    encode(String(message.value));
});
decodeText.addEventListener("submit", (e) => {
    e.preventDefault();
    decode(String(encodedMessage.value));
});
document.getElementById('imgEncoder').addEventListener('submit', function(event) {
  event.preventDefault();
  const file = document.getElementById('imageInput').files[0];
  const seed = document.getElementById('encodeSeed').value;
  if (file && seed) {
      processImage(file, encodeImage, seed);
      console.log(file.data);
  }
});

document.getElementById('imgDecoder').addEventListener('submit', function(event) {
  event.preventDefault();
  const file = document.getElementById('encodedImageInput').files[0];
  const seed = document.getElementById('decodeSeed').value;
  if (file && seed) {
      processImage(file, decodeImage, seed);
  }
});

talkText.addEventListener("submit", (e) => {
    e.preventDefault();
    intData(String(noise.value));
});
