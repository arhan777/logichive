const express = require('express');
const {userModel} = require('./model/model');
const app = express();
const cors = require('cors');

app.use(cors({
    origin: "http://localhost:3000"
}))

const multer = require('multer');

app.use(express.json());

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './uploads/');
    },
    filename: function(req, file, cb ){
        cb(null, new Date().valueOf()+file.originalname);
    }
})


const upload = multer({storage: storage});

app.use('/uploads', express.static('uploads'));


app.post('/', upload.single('file'), async (req, res) => {
    const heading = req.body.heading;
    const description = req.body.description;
    const imgurl = req.file.path;
    const newData = new userModel({heading, description, imgurl})
    await newData.save();

    res.send(newData);
})

app.get('/data', async (req, res) => {
    const allData = await userModel.find({});
    res.send(allData);
})

module.exports = app;