const mongoose = require('mongoose')

const TaskSChema = new mongoose.Schema({
    name: {
        type: String,
        required:[true, 'must provide name'],
        trim: true,
        maxlength: [30, 'name can not be more than 30'],
    },
    completed: {
        type: Boolean,
        default:false,
    }
})

module.exports = mongoose.model('Task', TaskSChema)