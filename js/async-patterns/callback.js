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

var readFileFunc1 = function() {
    setTimeout(function() {
        fs.readFile(file1, options, (err, file1Data) => {
            console.log(file1Data);
        });
    }, 500);
    return new Promise();
}

var readFileFunc2 = function() {
    setTimeout(function() {
        fs.readFile(file2, options, (err, file2Data) => {
            console.log(file2Data);
        });
    }, 300);
}

var readFileFunc3 = function() {
    setTimeout(function() {
        fs.readFile(file3, options, (err, file3Data) => {
            console.log(file3Data);
        });
    }, 100);
}

// Promise.all([readFileFunc2(), readFileFunc1(), readFileFunc3()]).then(function () {}, function () {
// });

var promise = function() {
    return new Promise(function(resolve, reject) {
        resolve();
    });
};

// readFileFunc1();
// readFileFunc2();
// readFileFunc3();

// Promise.resolve()
//   .then(function () {
//     readFileFunc1();
//     console.log('11111');
//   })
//   .then(function () {
//     readFileFunc2();
//     console.log('22222');
//   })
//   .then(function () {
//     readFileFunc3();
//     console.log('33333');
//   });


function delay(time) {
    return new Promise(function(resolve, reject) {
        setTimeout(resolve, time);
    });
}

delay(100)
    .then(function STEP2() {
        console.log("2번단계 100ms 후");
        return delay(200);
    })
    .then(function STEP3() {
        console.log("3번단계 300ms 후");
        return delay(200);
    })
    .then(function STEP4() {
        console.log("4번단계 400ms 후");
        return delay(200);
    })
    .then(function STEP5() {
        console.log("5번단계 500ms 후");
        return delay(200);
    })