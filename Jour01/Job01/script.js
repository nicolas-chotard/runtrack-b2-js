function myUpperCase(inputString) {
    if (typeof inputString === 'string') {
        const upperCaseString = inputString.toUpperCase();
        return upperCaseString;
    } else {
        console.log("Le paramètre n'est pas une chaîne de caractères.");
        return null;
    }
}
const input = "Hello, World!";
const result = myUpperCase(input);
console.log(result);
