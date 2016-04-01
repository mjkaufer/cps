var prompt = require('prompt');
var child_process = require('child_process')
prompt.start();

prompt.get(['filename', 'half steps up', 'half steps down'], function (err, result) {
  console.log(result)
  generateFiles(result["filename"],result["half steps up"], result["half steps down"])
});

function generateFiles(filename, hsu, hsd){

  var filePrefix = filename.substr(0, filename.lastIndexOf('.'))
  var fileSuffix = filename.substring(filename.lastIndexOf('.') + 1)

  for(var i = 1; i <= parseInt(hsu); i++){

    //sox <infile> <outfile> pitch <shift>
    var cmd = 'sox ' + filename + ' ' + filePrefix + "_" + i + '.' + fileSuffix + ' pitch ' + i * 100 
    console.log(cmd)
    child_process.execSync(cmd)
    console.log("Done with hsu",i)

  }

  for(var i = 1; i <= parseInt(hsd); i++){

    //sox <infile> <outfile> pitch <shift>
    var cmd = 'sox ' + filename + ' ' + filePrefix + "_-" + i + '.' + fileSuffix + ' pitch ' + -i * 100 
    console.log(cmd)
    child_process.execSync(cmd)
    console.log("Done with hsd",-i)

  }
}