var net = require('net');
const readline = require('readline');
var client = new net.Socket();


readline.emitKeypressEvents(process.stdin);
if (process.stdin.isTTY)
  process.stdin.setRawMode(true);



client.connect(8080, function(){
  process.stdin.read();
  process.stdin.on('readable', function(){
    client.write("" + process.stdin.read());
  });
})

client.on('data', function(data){
  console.log("" + data);
})

client.on('close', function() {
})
