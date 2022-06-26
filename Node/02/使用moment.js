const dayjs = require('dayjs')
var customParseFormat = require('dayjs/plugin/customParseFormat')

var now = dayjs().format('YYYY-MM-DD HH:mm:ss ') 


console.log(now);