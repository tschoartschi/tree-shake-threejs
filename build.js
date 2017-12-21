const fs = require('fs');

const checkSize = function (path) {
    const stats = fs.statSync(path);
    const fileSizeInBytes = stats.size;
    return fileSizeInBytes / 1000000.0;
};

const pathJs = __dirname + '/dist/';
const indexJs = pathJs + 'index.js';
const indexMinJs = pathJs + 'index.min.js';
const rollupCommand = 'node ' + __dirname + '/node_modules/rollup/bin/rollup --f iife -c';
require('child_process').execSync(rollupCommand);

const uglifyCommand = 'node ' + __dirname + '/node_modules/uglify-es/bin/uglifyjs -c -o ' + indexMinJs + ' -- ' + indexJs;
require('child_process').execSync(uglifyCommand);

const unminifiedSize = checkSize(indexJs);
const minifiedSize = checkSize(indexMinJs);

console.log('File size not uglified: ' + unminifiedSize + ' MB');
console.log('File size uglified: ' + minifiedSize + ' MB');
console.log('File uglified is ' + ((1 - minifiedSize / unminifiedSize) * 100).toFixed(3) + '% smaller!');

