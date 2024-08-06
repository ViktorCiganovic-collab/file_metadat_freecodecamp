var express = require('express');
var cors = require('cors');
require('dotenv').config();

const multer = require('multer');
const upload = multer();
const mime = require('mime-types');
var app = express();


app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});

app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {

const file = req.file;

const fileType = mime.lookup(file);

res.json({
name: req.file.originalname,
type: fileType,
size: req.file,
})

})
