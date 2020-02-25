const moongose = require('mongoose');

const CategorySchema = new moongose.Schema({
    number: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

moongose.model("Category", CategorySchema);