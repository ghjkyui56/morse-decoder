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
    arr = [];
    num = expr.length / 10;
        
    for (let i = 0; i<num; i++){
      arr[i] = expr.slice(0, 10);
      expr = expr.substring(10);
    }
    
    for (let i = 0; i<arr.length; i++){
        s = "";
        if (arr[i]==="**********"){
            arr[i] = " ";
        } else {
    
        for(let l=0;l<arr[i].length-1;l+=2){
            if (arr[i][l]==="1"){
                if (arr[i][l+1]==="0"){
                    s+=".";
                } else {
                    s+="-";
                }
            }
        }
        arr[i]=s;
      }
    }

    for (let i = 0; i<arr.length;i++){
        if (arr[i]!==" "){
        arr[i] = MORSE_TABLE[arr[i]];
        }
    }

    s = arr.join("");

    return s;
}

module.exports = {
    decode
}