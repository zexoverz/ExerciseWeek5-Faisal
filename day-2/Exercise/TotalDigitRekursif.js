function totalDigitRekursif(angka) {
    if (angka < 10) {
        return angka;
    } else {
        return angka % 10 + totalDigitRekursif(parseInt(angka / 10));
    }

}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8 // 2 + 1 + 5 , 
console.log(totalDigitRekursif(1542)); // 12 // 2 + 4 
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5