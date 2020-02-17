var moment = require('moment');
var math = require('mathjs');

console.log("Hello from JS");

var datetime = moment().startOf('hour').fromNow();
console.log(datetime);

console.log("Ch-Ch-Ch-changes");
console.log(math.sqrt(-4));

var name = 'Bob';
var time = 'today';
console.log(`Hello ${name}, how are you ${time}?`);