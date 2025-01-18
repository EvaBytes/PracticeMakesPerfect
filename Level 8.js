/* ASCII stands for American Standard Code for Information Interchange. 
Computers can only understand numbers, so an ASCII code is the numerical 
representation of a character. */

function getASCII(char) {
    if (char.length !== 1) {
        throw new Error("Please provide a character.");
    }
    return char.charCodeAt(0);
}


console.log(getASCII('E')); 
console.log(getASCII('V')); 
console.log(getASCII('A')); 
