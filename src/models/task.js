const mongoose = require('mongoose');

const {Schema} = mongoose;

const TaskSchema = new Schema({
    title: { type: String, required: true},
    description: { type: String, required: true}
})

//Como voy a utilizarlo dentro de mi aplicación
module.exports = mongoose.model('Task', TaskSchema);