const crypto = require('crypto');
const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');

// import dayjsPluginUTC from 'dayjs-plugin-utc';

dayjs.extend(utc);


var mt = Math.floor(Math.random() * 1000000);
var test = crypto.createHash('md5').update(dayjs().utc().format('YYYY-MM-DD[T]HH:mm:ss.SSS')).digest('hex') + mt;


console.log(test);