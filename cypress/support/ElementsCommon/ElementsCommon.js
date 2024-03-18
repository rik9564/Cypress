export function generateNewString(inputFormat) {
    if (typeof inputFormat === 'string') {
        return processStringFormat(inputFormat);
    } else if (typeof inputFormat === 'object') {
        return processObjectFormat(inputFormat);
    }
    if (typeof inputFormat === 'string') {
        return processStringFormat(inputFormat);
    } else if (typeof inputFormat === 'object') {
        return processObjectFormat(inputFormat);
    }
    return inputFormat;
}

function processStringFormat(inputFormat) {
    if (!inputFormat.includes("|")) return inputFormat;

    const elements = inputFormat.split('|');
    let result = "";

    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        if (element.startsWith("'") && element.endsWith("'")) {
            result += element.slice(1, -1);
        } else if (element.startsWith("num")) {
            result += generateRandomNumber(parseInt(elements[++i]));
        } else if (element.startsWith("alpha")) {
            result += generateRandomAlpha(parseInt(elements[++i]));
        } else if (element.startsWith("variable")) {
            result += getVariable(elements[++i]);
        } else if (element.startsWith("Variable:")) {
            result += getVariable(element.split(':')[1]);
        } else {
            result += element;
        }
    }
    return result;
}

function processObjectFormat(inputFormat) {
    for (let key in inputFormat) {
        if (inputFormat[key].startsWith('Variable:')) {
            const variable = inputFormat[key].split(':')[1];
            inputFormat[key] = getVariable(variable);
        }
    }
    return inputFormat;
}

function generateRandomNumber(numDigits) {
    let randomPart = "";
    for (let j = 0; j < numDigits; j++) {
        randomPart += Math.floor(Math.random() * 10);
    }
    return randomPart;
}

function generateRandomAlpha(numLetters) {
    let randomPart = "";
    for (let j = 0; j < numLetters; j++) {
        const charCode = 65 + Math.floor(Math.random() * 26);
        randomPart += String.fromCharCode(charCode);
    }
    return randomPart;
}

let myHashMap = {};
export function setVariable(Key, Value) {
    myHashMap[Key] = Value;
}

export function getVariable(Key) {
    return myHashMap[Key];
}
