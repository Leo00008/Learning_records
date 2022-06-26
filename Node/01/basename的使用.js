const path = require('path')
const fs = require('fs')
const { basename } = require('path')

const pathStr = path.join('/a', '/b/c', 'index.html')

var reslut = basename(pathStr)

console.log(reslut);

console.log(basename(reslut,'.html'));
