let myHashMap = {};

export function generateNewString(inputFormat) {
    let result = "";
    let result2 = {};
    if (typeof inputFormat === 'string') {
        if (inputFormat.toString().includes("|")) {
            const elements = inputFormat.split('|');
            for (let i = 0; i < elements.length; i++) {
                const element = elements[i];
                if (element.startsWith("'") && element.endsWith("'")) {
                    result += element.slice(1, -1);  // Add literal text (removing quotes)
                } else if (element.startsWith("num")) {
                    const numDigits = parseInt(elements[i + 1]);
                    let randomPart = "";
                    for (let j = 1; j <= numDigits; j++) {
                        randomPart += Math.floor(Math.random() * 10); // Generate random digit (0-9)
                    }
                    result += randomPart;
                    i++;
                } else if (element.startsWith("alpha")) {
                    const numLetters = parseInt(elements[i + 1]);
                    let randomPart = "";
                    for (let j = 1; j <= numLetters; j++) {
                        const charCode = 65 + Math.floor(Math.random() * 26); // A = 65, Z = 90
                        randomPart += String.fromCharCode(charCode);  // Generate random capital letter
                    }
                    result += randomPart;
                    i++;
                }
                else if (element.startsWith("variable")) {
                    const variable = elements[i + 1];
                    result += getVariable(variable);
                    i++;
                }
                else if (element.startsWith("Variable:")) {
                    const Values = element.split(':');
                    result += getVariable(Values[1]);
                }
                else {
                    result += element;
                }
            }
        }
        return result;
    }
    else if (typeof inputFormat === 'object') {
        for(let key in inputFormat){
            if(inputFormat[key].startsWith('Variable:')){
                const elementries = inputFormat[key].split(':');
                inputFormat[key] = getVariable(elementries[1]);
            }
        }
    }
    return inputFormat; 
}

export function setVariable(Key, Value) {
    myHashMap[Key] = Value;
}

export function getVariable(Key) {
    return myHashMap[Key];
}