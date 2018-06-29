# nhimai-exe
NPM package for reading the file and print country data in order on every 1 second

# Usage
To get the this package. Run the following command:
<pre>npm install nhimai-exe --save</pre>

after installing package you need to add this to your node main file (e.g. index.js or server.js) by adding following command:

var myPackage = require('nhimai-exe');

myPackage.readData(require('path/to/file.json'));
myPackage.on('countrydata', function(data){
  console.log('Country: ', data.country);
  console.log('Capital City: ', data.city);
  console.log('Country index: ', data.index); //0, 1, 2 etc..
});
