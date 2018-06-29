
var myPackage = require('./city');

myPackage.readData(require('./city_data.json'));
myPackage.on('countrydata', function(data){
  console.log('Country: ', data.country);
  console.log('Capital City: ', data.city);
  console.log('Country index: ', data.index); //0, 1, 2 etc..
});
