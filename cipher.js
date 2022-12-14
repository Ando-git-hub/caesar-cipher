"use strict";

const fs = require('fs')
const { cipher } = require('./utils')
const inputFilePath = './input.txt';
const outputFilePath = './output.txt';

const key = Number(process.argv[2]);
let text = process.argv[3];
console.log('key ', key)
console.log('text from arg ', text)

if(!key) throw new Error('Key required');
if(!Number.isInteger(key))  throw new Error('Key must be a number');

if(!text) {
    text = fs.readFileSync(inputFilePath).toString();
    console.log('file content ', text)
    if(!text) throw new Error('Nothing to encode');
}

fs.writeFileSync(outputFilePath, cipher(text, key))




