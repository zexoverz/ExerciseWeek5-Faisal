function meleeRangedGrouping(str) {
    if (str.length < 1) {
        return "[]";
    }

    var result = [
        [],
        []
    ]

    var string = "";
    var namaHero = "";
    var tipeHero = "";

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== "-" && str[i] !== ",") {
            string += str[i];
        } else if (str[i] === "-") {
            namaHero = string;
            string = "";
        }

        if (str[i] === "," || i === str.length - 1) {
            tipeHero = string;
            string = "";
            if (tipeHero === "Ranged") {
                result[0].push(namaHero);
                namaHero = "";
                tipeHero = "";
            } else if (tipeHero === "Melee") {
                result[1].push(namaHero);
                namaHero = "";
                tipeHero = "";
            }
        }
    }

    return result;
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []