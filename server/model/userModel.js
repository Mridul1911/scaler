const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 3,
        maxlength: 40,
        require: true
    },
    Project_name: {
        type: String,
        minlength: 3,
        maxlength: 100,
        require:true
    },
    "mentor":{
        type:String,
        enum:['',"mentor1","mentor2"]
    }
});
const userModel = new mongoose.model("userModel", userSchema);
module.exports = userModel;