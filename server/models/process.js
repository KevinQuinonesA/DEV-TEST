const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProcessSquema =  new Schema({
    product: {type:Schema.Types.ObjectId, ref:'Product'},
    state: {type:String, required: true}
});

module.exports = mongoose.model('Process', ProcessSquema);