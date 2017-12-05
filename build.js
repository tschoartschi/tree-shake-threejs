const fs = require('fs');

const pathJs = __dirname + '/dist/index.js';
const rollupCommand = 'node ' + __dirname + '/node_modules/rollup/bin/rollup --f iife -c';
require('child_process').execSync(rollupCommand);

const stats = fs.statSync(pathJs);
const fileSizeInBytes = stats.size;
const fileSizeInMegabytes = fileSizeInBytes / 1000000.0;

console.log('File size ' + fileSizeInMegabytes + ' MB');
