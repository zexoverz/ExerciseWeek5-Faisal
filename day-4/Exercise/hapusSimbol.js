function hapusSimbol(str) {
    // e("[^a-zA-Z0-9]+")
    let result = '';
    let newStr = str.match(/[a-z0-9]+/gi);

    for (let i = 0; i < newStr.length; i++) {
        if (newStr[i] !== ',') {
            result += newStr[i];
        }
    }

    return result;
}

// TEST CASES
console.log(hapusSimbol('test%$4aa')); // test4aa
console.log(hapusSimbol('devel0p3r s3j@@ati')); // devel0p3rs3jati
// console.log(hapusSimbol('ma@#k!an~')); // makan
// console.log(hapusSimbol('coding')); // coding
// console.log(hapusSimbol('1+3-5*2=100')); // 1352100