function changeVocals(str) {
    var alphabet = ['a', 'i', 'u', 'e', 'o', "A", "I", "U", "E", "O"];
    var Change = ['b', 'j', 'v', 'f', 'p', "B", "J", "V", "F", "P"]
    var result = [];

    for (let i = 0; i < str.length; i++) {
        var valid = false;
        for (let j = 0; j < alphabet.length; j++) {
            if (str[i] === alphabet[j]) {
                result.push(Change[j]);
                valid = true;
            };

        }

        if (valid === false) {
            result.push(str[i]);
        }
    }

    return result.join("");


}

function reverseWord(str) {
    var strRev = "";

    for (let i = 0; i < str.length; i++) {
        strRev = str[i] + strRev;
    }

    return strRev;
}

function setLowerUpperCase(str) {
    var temp = [];

    for (let i = 0; i < str.length; i++) {
        var kecil = str[i].toLowerCase();
        var besar = str[i].toUpperCase();
        if (str[i] === kecil) {
            temp.push(str[i].toUpperCase());
        } else if (str[i] === besar) {
            temp.push(str[i].toLowerCase());
        }
    }

    return temp.join("");
}

function removeSpaces(str) {
    var temp = [];

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            temp.push(str[i]);
        }
    }

    return temp.join("");
}

function passwordGenerator(name) {
    if (name.length < 5) {
        return "Minimal karakter yang diinputkan adalah 5 karakter";
    }

    var vocals = changeVocals(name);
    var reverse = reverseWord(vocals);
    var LowerUpper = setLowerUpperCase(reverse);
    var spaces = removeSpaces(LowerUpper);

    return spaces;
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'