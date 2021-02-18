const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    // write your model
    heading: {
        type: String
    },
    description: {
        type: String
    },
    imgurl: {
        type: String
    }
})

const userModel = mongoose.model("user", userSchema);


module.exports = {
    userModel: userModel
}