const moongose = require('mongoose');

const QuestionSchema = new moongose.Schema({
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
    alternatives: {
        type: [{
            letter: String,
            text: String
        }],
        required: true
    },
    correct_answers: {
        type: [String],
        required: true
    },
    rule_ids: [moongose.Schema.Types.ObjectId]
});

moongose.model("Question", QuestionSchema);