const moongose = require('mongoose');

const QuizSchema = new moongose.Schema({
    category_ids: [moongose.Schema.Types.ObjectId], //null for all the categories
    question_ids: [moongose.Schema.Types.ObjectId],
    // user_id : moongose.Schema.Types.ObjectId,
    result: {
        quantityOfQuestions: { type: Number, default: 0 },
        sumOfAlternatives: { type: Number, default: 0 },
        currentScore: { type: Number, default: 0 }
    },
    answers_log: {
        type: [{
            question_id: { type: moongose.Schema.Types.ObjectId },
            answers: { type: [String] },
        }]
    }
});

moongose.model("Quiz", QuizSchema);