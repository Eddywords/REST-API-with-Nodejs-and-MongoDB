const {Schema, model} = require('mongoose')

const todoSchema = new Schema({
    title: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 20,
    },
    description:{
        type: String,
        required: true,
        minlength: 3,
        maxlength: 20,  
    },

},
 {timestamps: true}
);

const todoModel = model('todos', todoSchema);

module.exports = todoModel;