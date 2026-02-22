console.log("Hello from SE3040 AF Lab 04!");
//read file
/*const fs = require('fs');
fs.readFile('file.txt', 'utf8', function (err, data) {
 if (err) throw err;
 console.log(data);
});
//Write file
const fs = require('fs');*/

//Write file
const fs = require('fs');

fs.writeFile('file.txt', 'Hello World!', function (err) {
 if (err) throw err;
 console.log('File saved!');
});