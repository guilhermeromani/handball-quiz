const moongose = require('mongoose');

const RuleSchema = new moongose.Schema({
    number: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    category_id: {
        type: moongose.Schema.Types.ObjectId,
        required: true
    },
    comment: String,
    note: String
});

moongose.model("Rule", RuleSchema);