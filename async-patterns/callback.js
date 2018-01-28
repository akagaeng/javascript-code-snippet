var fs = require('fs');

var options = {
  encoding: 'utf8'
}

var file1 = 'files/file1.txt';
var file2 = 'files/file2.txt';
var file3 = 'files/file3.txt';

// how to read file file1.txt > file2.txt > file3.txt

// // 1. use sync function
// console.log('1. use sync function');
// var syncFile1 = fs.readFileSync(file1, options);
// console.log(syncFile1);
// var syncFile2 = fs.readFileSync(file2, options);
// console.log(syncFile2);
// var syncFile3 = fs.readFileSync(file3, options);
// console.log(syncFile3);

// // 2. use callback pattern
// console.log('\n2. use callback pattern');
// fs.readFile(file1, options, (err, file1Data) => {
//   console.log(file1Data);
//   fs.readFile(file2, options, (err, file2Data) => {
//     console.log(file2Data);
//     fs.readFile(file3, options, (err, file3Data) => {
//       console.log(file3Data);
//     });
//   });
// });

// 3. use promise (https://www.npmjs.com/package/promise)
console.log('\n3. use promise (https://www.npmjs.com/package/promise)');

var readFileFunc1 = function () {
  fs.readFile(file1, options, (err, file1Data) => {
    console.log(file1Data);
  });
}

var readFileFunc2 = function () {
  fs.readFile(file2, options, (err, file2Data) => {
    console.log(file2Data);
  });
}

var readFileFunc3 = function () {
  fs.readFile(file3, options, (err, file3Data) => {
    console.log(file3Data);
  });
}
readFileFunc1();
readFileFunc2();
readFileFunc3();
// fs.readFile(file1, options, (err, file1Data) => {
//   console.log(file1Data);
//   fs.readFile(file2, options, (err, file2Data) => {
//     console.log(file2Data);
//     fs.readFile(file3, options, (err, file3Data) => {
//       console.log(file3Data);
//     });
//   });
// });