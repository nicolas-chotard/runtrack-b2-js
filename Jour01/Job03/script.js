function myIsInString(mainString, subString) {
    if (typeof mainString !== 'string' || typeof subString !== 'string') {
        console.log("Les paramètres ne sont pas valides.");
        return false;
    }

    for (let i = 0; i <= mainString.length - subString.length; i++) {
        let found = true;
        for (let j = 0; j < subString.length; j++) {
            if (mainString[i + j] !== subString[j]) {
                found = false;
                break;
            }
        }
        if (found) {
            return true;
        }
    }

    return false;
}


const isFound = myIsInString("Bonjour, comment ça va ?", "comment");
console.log(`La chaîne se trouve dans la chaîne principale : ${isFound}`);
