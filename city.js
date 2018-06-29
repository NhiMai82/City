const EventsEmmit = require('events')

let myPackage = new class extends EventsEmmit{
     readData(countries, counter = 0) {
        let returnedData = {};
        var length = countries.length;

    if (counter < length) {
        setTimeout(() => {
            returnedData = countries[counter];
            returnedData.index = counter;
            this.emit('countrydata', returnedData);
            counter++;
            this.readData(countries,counter);
        }, 1000);
    }
 }
}
module.exports = myPackage;