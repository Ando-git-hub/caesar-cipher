"use strict";

const supportedSymbols = 'abcdefghijklmnopqrstuvwxyz';
const count = supportedSymbols.length;


module.exports.cipher = function cipher (input, key) {
    const obj = {};
    for(let i = 0; i < count; i++) {
        let j = i + key;
        if(j >= count) j = j - count;
        obj[supportedSymbols[i]] = supportedSymbols[j]
    }

    console.log(obj)
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
        obj[supportedSymbols[j]] = supportedSymbols[i];
    }

    let decodedText = ''
    for (let char of input) {
        decodedText += obj[char] ? obj[char] : char;
    }

    console.log('decodedText ', decodedText);
    return decodedText;
}

// cipher('abc1, sdfo\nfksjdfhkjhfkjaerhfekrfdasd', 4)
// decoder('efg1, whjs\njownhjlonljoneivljiovjhewh', 4)
