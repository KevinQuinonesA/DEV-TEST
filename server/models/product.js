const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSquema =  new Schema({
    name: {type:String, required: true},
    gdate: {type:Date, required: true},
    image: {type:String, required:false},
    processes: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Process',
        },
      ]
});

module.exports = mongoose.model('Product', ProductSquema);