/**
 * Created by student on 2/17/14.
 */
var fs = require('fs');
var http = require('http');
http.createServer(function (req, res) {

    fs.readFile('data.txt', function(err, data){
        console.log("data", data);
        //return data;
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(data);
    });
//    res.writeHead(200, {'Content-Type': 'text/plain'});
//    res.end(fileContents);

    console.log("filecontents:", fileContents);

}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');