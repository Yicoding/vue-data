var express = require('express')
var compression = require('compression')
var fs = require("fs");
var multipart = require('connect-multiparty')
var multipartMiddleware = multipart()

var app = express()

var response
app.post('/edit/img/upload', multipartMiddleware, function(req, res) {
    var nowDate = new Date();
    console.log(req.files.file);  // 上传的文件信息
  
    var des_file = "./static/img/" + nowDate.getTime() + req.files.file.originalFilename;
    fs.readFile( req.files.file.path, function (err, data) {
        fs.writeFile(des_file, data, function (err) {
            if( err ){
                console.log( err );
            }
            response = {
                message:'File uploaded successfully', 
                filename:nowDate.getTime() + req.files.file.originalFilename
            }
            console.log( response.filename );
            res.status(200).send({filename: response.filename});
        });
    });
})




app.use(compression())
app.use(express.static('./dist'))

app.listen(process.env.PORT || 5050)
