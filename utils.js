"use strict";

const lowLetters = 'abcdefghijklmnopqrstuvwxyz';
const upLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const count = upLetters.length;


module.exports.cipher = function cipher (input, key) {
    const obj = {};
    for(let i = 0; i < count; i++) {
        let j = i + key;
        if(j >= count) j = j - count;
        obj[lowLetters[i]] = lowLetters[j]
        obj[upLetters[i]] = upLetters[j]
    }

    let encodedText = ''
    for (let char of input) {
        encodedText += obj[char] ? obj[char] : char;
    }

    console.log('encodedText ', encodedText);
    return encodedText;
}

exports.decoder = function decoder(input, key) {
    const obj = {};
    for(let i = 0; i < count; i++) {
        let j = i + key;
        if(j >= count) j = j - count;
        obj[lowLetters[i]] = lowLetters[j]
        obj[upLetters[i]] = upLetters[j]
    }

    let decodedText = ''
    for (let char of input) {
        decodedText += obj[char] ? obj[char] : char;
    }

    console.log('decodedText ', decodedText);
    return decodedText;
}
