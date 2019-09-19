function kaliTerusRekursif(angka) {
    if (angka < 10) {
        return angka;
    } else {
        return angka % 5 * kaliTerusRekursif(parseInt(angka / 10));
    }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6