const myInformation = require('./information');
const cowsay = require('cowsay');


console.log(cowsay.say({
    text: `Name: ${myInformation.name}, Campus: ${myInformation.campus}`,
    e: 'oO',
    T: "U "
}));