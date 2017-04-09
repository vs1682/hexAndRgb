#!/usr/bin/env node

'use strict';

const program = require('commander');

program
    .version('0.0.1')
    .option('-c, --convert <required>', 'convert hex to rgb', hexToRgb)
    .option('-r, --reverse <required>', 'convert rgb to hex', rgbToHex)
    .parse(process.argv);

function hexToRgb(value){
    let decValues = [];
    while(value){
        let part = value.substr(0,2);
        value = value.substr(2, value.length -2);
        decValues.push(parseInt('0x'+part, 16));
    }
    console.log(decValues.join(','));
}

function rgbToHex(value){
    let hexValues = [];
    value.split(',').forEach(
        function(num){
            num = parseInt(num);
            hexValues.push((num.toString(16)));
        }
    );
    console.log(hexValues.join(','));
}