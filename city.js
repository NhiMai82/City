
var Events = require('events')

let counter = 0;

let myPackage = new class extends Events{
     readData(fileJSON) {
        var returnedData = {};
        var length = fileJSON.length;
    if (counter < length) {
        setTimeout(() => {
            returnedData=fileJSON[counter];
            returnedData.index = counter;
            this.emit('countrydata', returnedData);
            counter++;
            this.readData(fileJSON,counter);
        }, 1000);
    }
 }
}
module.exports = myPackage;



