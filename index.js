const express = require('express');
const cors = require('cors');
require('dotenv').config()
const app = express();
const multer  = require('multer')
const upload = multer({ dest: './public/data/uploads/' })
app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse', upload.single('upfile'), (req, res) =>{
  if(!req.file){
    return res.send("You should select a file")
  }
  let {originalname, mimetype, size} = req.file
  let resObj = {
    originalname,
    mimetype,
    size
  }
    res.json(resObj)
  })
const port = process.env.PORT || 3002;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
