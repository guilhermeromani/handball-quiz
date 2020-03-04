const moongose = require('mongoose');

const CategorySchema = new moongose.Schema({
    number: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    }
});

moongose.model("Category", CategorySchema);