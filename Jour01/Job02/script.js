function myCountChar(inputString, targetChar) {
    if (typeof inputString !== 'string' || typeof targetChar !== 'string' || targetChar.length !== 1) {
        console.log("Les paramètres ne sont pas valides.");
        return;
    }

    let count = 0;
    for (let i = 0; i < inputString.length; i++) {
        if (inputString[i] === targetChar) {
            count++;
        }
    }

    console.log(`Le caractère "${targetChar}" apparaît ${count} fois dans la chaîne "${inputString}".`);
}

myCountChar("Hello, world!", "o");
