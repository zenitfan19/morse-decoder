const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let result = "";
  let words = expr.split(/\*{10}/g);
  for (let word of words) {
    let wordLength = word.length / 10;
    for (let i = 0; i < wordLength; i++) {
      let letter = word.substring(i*10, i*10+10);
      result += MORSE_TABLE[covertFromBinary(letter)];      
    }
    result += ' ';
  }
    return result.substring(0, result.length - 1);
}

function covertFromBinary(letter) {
  return letter.replace(/00/g, '').replace(/10/g, '.').replace(/11/g, '-');
}

module.exports = {
    decode
}