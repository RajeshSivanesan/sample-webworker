var fs = require('fs');

function readWriteAsync() {
  fs.readFile('views-count.txt', 'utf-8', function(err, data){
    if (err) throw err;

    console.log(data);

    var newValue = parseInt(data) + 1;

    console.log(newValue);

    fs.writeFile('views-count.txt', newValue, 'utf-8', function (err) {
      if (err) throw err;
      console.log('file update complete');
    });
  });
}

setInterval(function() {
    readWriteAsync();
}, 20 * 1000);